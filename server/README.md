# Layyah Store Backend

This is the backend API for the Layyah Online Store. It's built with Node.js, Express, and MongoDB.

## Features

- User authentication (register, login)
- Product management (CRUD operations)
- Shopping cart functionality
- Category management
- Protected routes with JWT authentication
- Role-based access control

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup

1. Clone the repository
2. Navigate to the server directory:
   ```bash
   cd server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/layyah-store
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRES_IN=90d
   NODE_ENV=development
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

- POST `/api/users/register` - Register a new user
- POST `/api/users/login` - Login user
- GET `/api/users/me` - Get current user
- PATCH `/api/users/me` - Update current user

### Products

- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get single product
- POST `/api/products` - Create product (admin only)
- PATCH `/api/products/:id` - Update product (admin only)
- DELETE `/api/products/:id` - Delete product (admin only)

### Cart

- GET `/api/cart` - Get user's cart
- POST `/api/cart/add` - Add item to cart
- PATCH `/api/cart/update` - Update cart item quantity
- DELETE `/api/cart/remove/:productId` - Remove item from cart
- DELETE `/api/cart/clear` - Clear cart

## Error Handling

The API uses a consistent error handling format:

```json
{
  "status": "fail",
  "message": "Error message"
}
```

## Authentication

Protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## Development

To start the development server with hot reloading:

```bash
npm run dev
```

## Production

To build and start the production server:

```bash
npm start
```
