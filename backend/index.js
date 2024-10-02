const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); 

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
 

 
 

// Set the port dynamically
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => res.send("Express on Vercel"));

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;