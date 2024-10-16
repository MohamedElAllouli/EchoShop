# EchoShop - MERN E-Commerce Platform

![EchoShop](https://ibb.co/3vDBpB4) <!-- Add a relevant logo or image for your project -->

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contact](#contact)

---

## Introduction

**EchoShop** is a full-featured **MERN** stack e-commerce platform that allows users to browse, search, and purchase products online. It features a clean and responsive UI, user authentication, shopping cart, payment integration, and an admin dashboard to manage products, orders, and users.

## Features

- Full-fledged product search, filtering, and sorting.
- User authentication and authorization (JWT, bcrypt).
- Shopping cart functionality (add, remove, checkout).
- Payment integration (with Stripe).
- Admin dashboard for product, user, and order management.
- Order history and management.
- Responsive design for mobile and desktop.
- Pagination for large product listings.

## Tech Stack

### Frontend:
- React.js (with hooks)
- React-Bootstrap
- Axios
- React Router
- Redux for state management
- Helmet for SEO optimization

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Stripe for payment processing
- Bcrypt for password hashing

## Installation

To run **EchoShop** locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/MohamedElAllouli/EchoShop.git
cd EchoShop
```

## Install Dependencies


## Backend:

```bash
cd backend
npm install
```
Frontend:

```bash
cd ../frontend
npm install
```

## 3. Run MongoDB
Ensure MongoDB is running on your machine or use MongoDB Atlas.

## 4. Environment Variables
Create a .env file in both the backend folder and fill out the following variables:

```bash
# Backend .env
PORT=5000
MONGODB_URI=mongodb+srv://your-db-url
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=your-stripe-key
```
## 5. Run the Application
## Backend (Node.js):

```bash
cd backend
npm start

```
## Frontend (React):
```bash
cd frontend
npm start
```
The app will be available at http://localhost:3000 for the frontend, and the backend will run on http://localhost:4000.

Environment Variables
You will need the following environment variables for the application to function properly:

MONGODB_URI: Your MongoDB connection string.
JWT_SECRET: Secret key for JSON Web Token.
STRIPE_SECRET_KEY: Secret key for Stripe payment processing.
Usage
# 1. Admin:
Login as an admin to manage products, users, and orders.
Add new products, update existing ones, and manage the inventory.
2. Users:
Register and login to browse products and manage your cart.
Place orders and view your order history.




Contact
For any inquiries or issues, you can reach out:

## Project Owner: EL ALLOULI MOHAMED - ADNAN EL MOUSTAGHFIR
## Email: alloulialloulimohamed2023@gmail.com
## GitHub: MohamedElAllouli

```bash

### Key Sections:
- **Features**: Highlight core functionality like product browsing, cart, and admin features.
- **Tech Stack**: Mention frontend, backend, and additional libraries (React, Redux, Node.js, MongoDB, etc.).
- **Installation**: Explain how to clone the repository, install dependencies, set up environment variables, and run the project.
- **Usage**: Summarize the app’s functionality for users and admins.
- **API Documentation**: Briefly mention API endpoints, linking to more detailed docs if needed.
- **Contributing**: Invite contributors with clear steps for forking, branching, and pull requests.

```