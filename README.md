# Ecommerce_Website

Welcome to **shopHere**, a comprehensive e-commerce application built using the MERN stack (MongoDB, Express, Node.js, and React.js). This application offers a complete shopping experience with features like user authentication, product management, shopping cart, and order processing.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features
- User Authentication (Sign Up, Sign In, Sign Out)
- Product Management (Create, Read, Update, Delete operations for products)
- Shopping Cart functionality
- Responsive Design for all devices
- Secure Payments integration
- Order Management system (Coming Soon)
- Role Based Access (Coming Soon)

## Technologies Used
- **Frontend:**
  - React.js (using Material UI)
  - Redux (State management)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Database)
  - Mongoose (Object Data Modeling library)

## Installation
Follow these steps to get the application up and running on your local machine:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/zishanAl/shopHere.git
    cd shopHere
    ```

2. **Install server dependencies:**
    ```sh
    cd api
    npm install
    ```

3. **Install client dependencies:**
    ```sh
    cd client
    npm install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the `api` directory with the following content:
    ```
    PASS_SEC=development
    STRIPE_KEY=your_stripe_key
    MONGO_URI=your_mongo_connection_string
    JWT_SEC=your_jwt_secret
    ```

5. **Run the application:**
    - Start the backend server:
      ```sh
      cd api
      npm start
      ```
    - Start the frontend development server:
      ```sh
      cd client
      npm start
      ```

## Usage
- Visit [http://localhost:3000](http://localhost:3000) to access the application.
- Browse products, add them to your cart, and proceed to checkout.

## API Endpoints
Key API endpoints available in the backend server:

- **User Routes:**
  - `POST /api/auth/login` - Authenticate user and obtain token
  - `POST /api/auth/register` - Register a new user
  - `PUT /api/users/:id` - Update user profile
  - `DELETE /api/users/:id` - Delete user

- **Product Routes:**
  - `GET /api/products` - Retrieve all products
  - `GET /api/products/find/:id` - Retrieve a product by ID
  - `POST /api/products` - Create a new product (Admin only)
  - `PUT /api/products/:id` - Update a product (Admin only)
  - `DELETE /api/products/:id` - Delete a product (Admin only)

- **Order Routes:**
  - `POST /api/orders` - Create a new order
  - `PUT /api/orders/:id` - Update an order by ID (Admin only)
  - `GET /api/orders` - Retrieve all orders (Admin only)

## Contributing
We welcome contributions from the community! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Thank you for using shopHere! If you have any questions or feedback, please open an issue or contact us.

Happy coding!

---

Feel free to adjust any section as needed!
