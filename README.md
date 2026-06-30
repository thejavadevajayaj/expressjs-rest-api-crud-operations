# Express.js CRUD REST API

## Overview

This project is a simple REST API built using **Express.js** to demonstrate CRUD (Create, Read, Update, Delete) operations.

The project does **not** use any database. Data is managed in memory for demonstration purposes.

The API endpoints were tested using **Postman**.

## Technologies Used

* Node.js
* Express.js
* Postman

## Features

* Create a User data [Username and Password]
* Retrive User Data
* Update the User Data
* Delete a User Data

## Project Structure

project-folder/
│
├── node_modules/
├── app.js 
├── package-lock.json
├── package.json 

> The folder structure may vary depending on your implementation.

## API Endpoints

| Method | Endpoint           | Description        |
| ------ | ----------------   | ------------------ |
| POST   | /createUser-login  | Create a record    |
| GET    | /getUser           | Get all records    |
| PUT    | /updateUser-login  | Update a record    |
| DELETE | /deleteUser-login  | Delete a record    |

## Testing

All API endpoints were tested using **Postman**.

## Notes

* This project is intended for learning and demonstration purposes.
* No database is used.
* Data will not persist after restarting the server.

## Author

Ajay Vasanth
