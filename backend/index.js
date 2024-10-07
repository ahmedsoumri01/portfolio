const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('./models/Admin'); // Import Admin model

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// allow cross-origin requests
app.use(cors(
  {
    origin:  '*', // allow all origins
    credentials: true,
  }
));
app.use(express.json());

const createDefaultAdmin = async () => {
  try {
    // Check if there is already an admin in the database
    const existingAdmin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    
    if (!existingAdmin) {
      // If no admin exists, create a default one
      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
      
      const newAdmin = new Admin({
        username: 'admin',
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
      });
      
      await newAdmin.save();
      console.log("Default admin created successfully!");
    } else {
      console.log("Admin already exists. No need to create a default admin.");
    }
  } catch (error) {
    console.error("Error creating default admin:", error);
  }
};

// Create the default admin when the server starts
createDefaultAdmin();

// Set the port dynamically
const PORT = process.env.PORT || 3001;
//routes 
app.use('/api/admin', require('./routes/adminRoutes'));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/experiences', require('./routes/experienceRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/skills', require('./routes/skillsRoutes'));
app.get("/", (req, res) => res.send("Express on Vercel"));

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
