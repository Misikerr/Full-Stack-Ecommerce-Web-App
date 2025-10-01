import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";


const createToken = (id) => {
    // Create and return a JWT token
    return jwt.sign({id}, process.env.JWT_SECRET);
}

// Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({
                message: "Email and password are required",
                success: false
            });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({
                message: "User not found",
                success: false
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            return res.json({
                message: "Login successful",
                success: true,
                token
            });
        } else {
            return res.json({
                message: "Invalid credentials",
                success: false
            });
        }
    } catch (error) {
        console.log(error);
        res.json({ message: error.message, success: false });
    }
};

// Route for user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({
                message: "Name, email, and password are required",
                success: false
            });
        }

        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({
                message: "User already exists",
                success: false
            });
        }

        // Validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({
                message: "Invalid email! Please enter a valid email",
                success: false
            });
        }
        if (password.length < 8) {
            return res.json({
                message: "Please enter a strong password (minimum 8 characters)",
                success: false
            });
        }

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);

        res.json({
            message: "Registration successful",
            success: true,
            token
        });
    } catch (error) {
        console.log(error);
        res.json({ message: error.message, success: false });
    }
};

//Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({
                success: false,
                message: "Email and password are required"
            });
        }

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({
                success: false,
                message: "Invalid credentials"
            });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export {loginUser, registerUser, adminLogin};