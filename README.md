<img width="1920" height="1080" alt="Screenshot (28)" src="https://github.com/user-attachments/assets/00cdbd26-8f2b-42da-b3c6-5ae2dc810110" />#  Mini E-Commerce Cart App
A simple full-stack e-commerce shopping cart application built using **React (frontend)** and **Node.js + Express (backend)** with **MongoDB** as the database.
## 🚀 Features

### 🖥️ Frontend (React + Tailwind CSS)
- Product listing with images and details.
- Add to Cart functionality.
- View and update cart items (quantity).
- Checkout form.
- Responsive design built using **Tailwind CSS**.

### ⚙️ Backend (Node + Express + MongoDB)
- RESTful APIs for products, cart, and checkout.
- MongoDB connection for data storage.
- CORS enabled for frontend-backend communication.
- Error handling with `http-errors`.
- Organized MVC structure (controllers, models, routes).

- ## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Tools | Vite, Nodemon, CORS, Morgan |

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/KambleSudhirSejal/mini-ecommerce-cart.git
cd mini-ecommerce-car

2️⃣ Install Dependencies
Backend
cd Backend_cart_items
npm install

Frontend
cd ../cart_item
npm install

Run the Application
Start Backend Server
cd Backend_cart_items
cd cart_backend
npm start
nodemon

Start Frontend (Vite)
cd ../cart_item
npm run dev

Access the App

Frontend: http://localhost:5173
 (Vite default)

Backend API: http://localhost:3000

API Endpoints
Endpoint	Method	Description
/api/products -> 	GET	Fetch all products
/api/cart -> 	POST	Add item to cart
/api/cart ->	GET	Get cart items
/api/checkout ->	POST	Submit checkout form


Author

Sejal Kamble





