
# 🛍️ Modern E-Commerce Platform

A full-stack e-commerce application built with the MERN stack, featuring a customer-facing store, admin dashboard, and robust backend API. This project demonstrates modern web development practices with responsive design, secure authentication, and seamless payment integration.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)
![React](https://img.shields.io/badge/React-19+-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-5+-green.svg)

## ✨ Features

### 🛒 Customer Store
- **Product Browsing**: Browse products by categories (Men, Women, Kids) and subcategories (Topwear, Bottomwear, Winterwear)
- **Advanced Search**: Real-time product search with filtering capabilities
- **Product Details**: Detailed product pages with multiple images and size selection
- **Shopping Cart**: Add, remove, and modify cart items with size selection
- **User Authentication**: Secure login and registration system
- **Order Management**: Place orders and track order history
- **Payment Integration**: Support for Stripe and Razorpay payment gateways
- **Responsive Design**: Mobile-first design with Tailwind CSS

### 🔧 Admin Dashboard
   https://full-stack-ecommerce-web-app-admin2.onrender.com
- **Product Management**: Add, edit, and delete products with image upload
- **Inventory Control**: Manage product categories, sizes, and bestseller status
- **Order Management**: View and manage customer orders
- **Image Upload**: Multiple product images with Cloudinary integration
- **Admin Authentication**: Secure admin-only access

### 🚀 Backend API
- **RESTful API**: Well-structured REST endpoints
- **Authentication**: JWT-based authentication system
- **File Upload**: Multer integration for image handling
- **Database**: MongoDB with Mongoose ODM
- **Security**: bcrypt password hashing and input validation
- **Cloud Storage**: Cloudinary integration for image management

## 🛠️ Tech Stack

### Frontend (Customer Store)
- **React 19** - Modern React with hooks and context
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Toastify** - Toast notifications

### Admin Dashboard
- **React 19** - Component-based UI
- **Vite** - Development and build tooling
- **Tailwind CSS** - Responsive styling
- **Axios** - API communication
- **React Router DOM** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **Multer** - File upload handling
- **Cloudinary** - Image storage and optimization
- **Stripe & Razorpay** - Payment processing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Ecommerce-App/
├── frontend/                 # Customer-facing store
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── context/         # React context for state management
│   │   ├── assets/          # Images and static files
│   │   └── App.jsx          # Main app component
│   ├── package.json
│   └── vite.config.js
│
├── admin/                   # Admin dashboard
│   ├── src/
│   │   ├── components/      # Admin UI components
│   │   ├── pages/          # Admin pages (Add, List, Orders)
│   │   ├── assets/         # Admin assets
│   │   └── App.jsx         # Admin app component
│   ├── package.json
│   └── vite.config.js
│
├── backend/                 # Server and API
│   ├── config/             # Database and service configurations
│   ├── controllers/        # Route handlers
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── package.json
│   └── server.js          # Express server
│
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or cloud)
- Cloudinary account for image storage
- Stripe and/or Razorpay accounts for payments

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app
```

### 2. Backend Setup
```bash
cd backend
npm install

npm run server
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install

# Create .env file with:
# VITE_BACKEND_URL=http://localhost:4000

npm run dev
```

### 4. Admin Dashboard Setup
```bash
cd ../admin
npm install

# Create .env file with:
# VITE_BACKEND_URL=http://localhost:4000

npm run dev
```

## 🌐 API Endpoints

### Authentication
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `POST /api/user/admin` - Admin login

### Products
- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add new product (Admin)
- `POST /api/product/remove` - Remove product (Admin)
- `POST /api/product/single` - Get single product

### Cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/update` - Update cart item
- `POST /api/cart/get` - Get user cart

### Orders
- `POST /api/order/place` - Place new order
- `POST /api/order/stripe` - Stripe payment
- `POST /api/order/razorpay` - Razorpay payment
- `POST /api/order/userorders` - Get user orders
- `POST /api/order/list` - Get all orders (Admin)
- `POST /api/order/status` - Update order status (Admin)


### Frontend & Admin (.env)
```env
VITE_BACKEND_URL=http://localhost:4000
```

## 🚀 Deployment

### Backend Deployment (Railway/Heroku)
1. Set up environment variables in your deployment platform
2. Deploy the backend folder
3. Update frontend and admin environment variables with the deployed backend URL

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set up environment variables in your deployment platform

## 📸 Screenshots

*Add screenshots of your application here to showcase the UI*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔧 Development

### Running Tests
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

### Code Formatting
```bash
# Format code with ESLint
npm run lint
```

## 📞 Support

If you have any questions or run into issues, please:
1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Reach out via telegram: [@Im_1210](https://t.me/Im_1210)

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js community
- MongoDB for the database solution
- Cloudinary for image management
- Stripe and Razorpay for payment processing
- Tailwind CSS for the styling framework

---

⭐ **Star this repository if you found it helpful!**
