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

* Create API
* Read API
* Update API
* Delete API
* RESTful API endpoints
* API testing using Postman

## Database

No database has been integrated in this project. The focus is on implementing CRUD API endpoints using Express.js.  

## Current Implementation
* Each API returns an appropriate HTTP status code.
* Responses are displayed in Postman.
* Success and informational messages are logged using console.log().
* No persistent data storage is used.

## API Testing
All CRUD endpoints were tested using Postman.

Example responses:

Create → 201 Created
Read → 200 OK
Update → 200 OK
Delete → 200 OK

The API currently returns status codes and response messages without database integration.

## Project Structure

project-folder/
│
├── node_modules/
├── app.js 
├── package-lock.json
├── package.json 

> The folder structure may vary depending on your implementation.

## API Endpoints

| Method |               Endpoint                 | Description        |
| ------ |   ----------------------------------   | ------------------ |
| POST   | http://localhost:3000/createUser-login | Create a record    |
| GET    | http://localhost:3000/getUser          | Get all records    |
| PUT    | http://localhost:3000/updateUser-login | Update a record    |
| DELETE | http://localhost:3000/deleteUser-login | Delete a record    |



## Notes

* This project is intended for learning and demonstration purposes.
* No database is used.

## Author

Ajay Vasanth


