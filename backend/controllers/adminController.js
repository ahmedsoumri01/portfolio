const Admin =  require('../models/Admin');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
//test route
exports.test = (req, res) => {
  res.send("Admin route");
}
//get admin profile by id
exports.getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

//update admin profile , check if the password is not changed then don't replace it with new one 
exports.updateAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    admin.username = req.body.username || admin.username;
    admin.email = req.body.email || admin.email;
    if(req.body.password || req.body.oldPassword){
      //check if the old password is correct
      const isMatch = await bcrypt.compare(req.body.oldPassword, admin.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(req.body.password, salt);

    }
    await admin.save();
    res.json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}