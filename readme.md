# Full stack coding challenge

> Application built with the MERN stack.

# I am planning to download csv file and extract the data from that file after that save the data into MongoDB. Now I am going to retrive data from database and implement sorting and Filtering.

### Env Variables

Create a .env file in then root and add the following

NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri

## Install Dependencies

# Backend

npm install

# Frontend

cd frontend
npm install

### Run

# Run frontend (:3000) & backend (:5000)

npm run dev

# Run backend only

npm run server

# Run frontend only

npm start

## Build & Deploy

# Create frontend prod build

cd frontend
npm run build

### Seed Database

You can use the following commands to seed the database as well as destroy all data

# Import data

npm run data:import

# Destroy data

npm run data:destroy

# Test (Backend)

npm run test

# Features

## backend

> get the list of products from a CSV file
> store the data in DB
> dockerize the application
> testing

## frontend

> Connect to your back-end application and get the list of products
> Render the list of products in a table with pagination \& filtering
> clicking to see the details of specific row, the application will navigate
> to details of that product and be able to share that product's link
> testing

# Project Architecture

Client(Web Browser) -> Web Server (Front End App) -> Back-End Server (Back End API) -> MongoDB
