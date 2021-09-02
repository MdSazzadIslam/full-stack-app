# Full stack coding challenge

> Application built with the MERN stack.

# I am planning to download csv file and extract the data from that file after that save the data into MongoDB. I will follow MVC pattern.

### Env Variables

Create a .env file in then root and add the following

NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri

## Install Dependencies (frontend & backend)

npm install
cd frontend
npm install

### Run

# Run frontend (:3000) & backend (:5000)

npm run dev

# Run backend only

npm run server

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
