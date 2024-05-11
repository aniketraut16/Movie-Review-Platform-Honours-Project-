# Movie Review Platform App

This repository contains the source code for a Movie Review Platform App, where users can read and write reviews about movies. The project is divided into two folders: frontend and backend.

## Backend

The backend folder contains the server-side code written in Node.js using Express.js framework. It interacts with a MongoDB database to store user information, reviews, and other data.

### Setup

1. Navigate to the backend folder.
2. Create a `.env` file based on the provided `.env.example` file and update it with your MongoDB Atlas credentials and a secret key for JWT token.
3. Run `npm install` to install all dependencies.
4. Start the server by running `npm start` or `node index.js`.
5. Upon the first run, an admin user will be automatically generated with the credentials:
   - Username: admin
   - Password: admin#123

## Frontend

The frontend folder contains the client-side code written in React.js. It provides the user interface for interacting with the Movie Review Platform.

### Setup

1. Navigate to the frontend folder.
2. Run `npm install` to install all dependencies.
3. Start the frontend development server by running `npm run dev`.

## Usage

Once the backend and frontend servers are running, you can access the Movie Review Platform in your web browser. You can log in as an admin or a user to use the platform features.

- **Admin**: Use the admin credentials provided above to log in and manage users, reviews, and other aspects of the platform.
- **User**: Register for a new account or use existing user credentials to log in and read/write movie reviews.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it according to your needs.
