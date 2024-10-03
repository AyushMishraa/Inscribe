# Inscribe

Inscribe is a full-stack blogging application where users can sign up, log in, and create, update, delete, and access blog posts. The application uses **Node.js**, **Express.js**, **MongoDB**, and **JWT-based authentication** to manage users and posts securely.

## Features

- **User Authentication**: Sign up and log in using secure JWT-based authentication.
- **Create Posts**: Authenticated users can create blog posts with a title, content, and author information.
- **Update/Delete Posts**: Authenticated users can update or delete their own blog posts.
- **View Posts**: All users can view blog posts.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT), bcrypt for password hashing
- **Environment Variables**: Managed with dotenv
- **Testing API**: Postman

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or MongoDB Atlas)
- Postman for testing the API

### Steps to Run the Project Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/inscribe.git
   cd inscribe
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` File**
   In the project root, create a `.env` file with the following content:

   ```
   PORT=9000
   URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/inscribe
   SECRET=your_jwt_secret_key
   ```

   - Replace `<username>`, `<password>` with your MongoDB credentials.
   - Set your own secret key for JWT.

4. **Start the Server**
   ```bash
   npm start
   ```

   The server will be running on `http://localhost:9000`.

### MongoDB Setup

- If using **MongoDB Atlas**, create a new cluster and replace the `URI` in the `.env` file.
- If using **local MongoDB**, update the `URI` accordingly.

## API Endpoints

### Authentication Routes

- **POST** `/api/posts/signup`: Sign up a new user
  - Body: `{ "userName": "string", "email": "string", "password": "string" }`
  
- **POST** `/api/posts/login`: Log in an existing user
  - Body: `{ "userName": "string", "password": "string" }`

### Blog Post Routes

- **GET** `/api/posts`: Get all posts
- **GET** `/api/posts/:id`: Get a specific post by ID
- **POST** `/api/posts`: Create a new post (requires authentication)
  - Body: `{ "title": "string", "content": "string", "author": "string" }`
  
- **PUT** `/api/posts/:id`: Update a post by ID (requires authentication)
  - Body: `{ "title": "string", "content": "string" }`
  
- **DELETE** `/api/posts/:id`: Delete a post by ID (requires authentication)

### Postman Collection

A **Postman** collection is available in the project for easy testing of the API. Import the collection into Postman to start making requests.

## Middleware

- **Authentication**: JWT tokens are used to authenticate users. Tokens are stored in cookies and checked for validity before allowing access to protected routes.
- **Password Hashing**: Passwords are securely hashed using `bcrypt` before saving to the database.

## Error Handling

- The app includes basic error handling for missing routes, invalid tokens, and other common errors.

## Future Enhancements

- Implement user roles (e.g., admin, editor).
- Add features for liking and commenting on posts.
- Improve frontend with a UI to interact with the API.

## License

This project is licensed under the MIT License.
