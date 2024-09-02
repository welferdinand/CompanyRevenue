# Project Setup

This guide provides instructions for running both the server and client parts of the project locally.

## Server Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/welferdinand/CompanyRevenue.git
   ```

2. **Open the first terminal:**
   
   ```bash
   cd server
   ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Create the database:**

    ```bash
    npx sequelize db:create
    ```

5. **Run database migrations:**

    ```bash
    npx sequelize db:migrate
    ```

6. **Seed the database with dummy user:**

    ```bash
    npx sequelize db:seed:all
    ```

    Note: The dummy user credentials are:

   * Username: admin
   * Password: admin

7. **Create a `.env` file in the `server` directory and set the environment variable:**

    ```plaintext
    JWT_SECRET=<value>
    ```

    Note: The JWT_SECRET value is "revenue"

8. **Start the server:**

    ```bash
    nodemon app.js
    ```

## Client Setup

1. **Open the second terminal:**
   
   ```bash
   cd client
   ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the client application:**
   
   ```bash
   npm run dev
   ```

## Summary

* Server: Runs on the first terminal.
* Client: Runs on the second terminal.
  
Make sure both the server and client are running to fully test the application. If you encounter any issues, verify that all steps have been followed correctly and check the relevant logs for errors.