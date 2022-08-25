import mongoose from "mongoose";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const signUp = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const u = await newUser.save();
    console.log(u)
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const signIn = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    !user && res.status(400).json("User not exist");
    const checkPassword = user.password === req.body.password;
    !checkPassword && res.status(400).json("Invalid password");
    console.log(user._doc)
    const accessToken = jwt.sign({ id: user._id }, process.env.access_token);
    const refreshToken = jwt.sign({id:user._id}, process.env.refresh_token);
    res.status(201).json({
        id:user._id,
        accessToken: accessToken,
        refreshToken: refreshToken
    })
  } catch (error) {
    res.status(400).json(error);
  }
};

export const signInWithGoogle = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const accessToken = jwt.sign({ id: user._id }, process.env.access_token);
      const refreshToken = jwt.sign({id:user._id}, process.env.refresh_token);
      res.status(201).json({
        id:user._id,
        accessToken: accessToken,
        refreshToken: refreshToken
      })
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle: true
        });
      const savedUser = await newUser.save();
      console.log(savedUser._doc)
      const accessToken = jwt.sign({ id: savedUser._id }, process.env.access_token);
      const refreshToken = jwt.sign({id:savedUser._id}, process.env.refresh_token);
      res.status(201).json({
        id:user._id,
        accessToken: accessToken,
        refreshToken: refreshToken
      })
    }
  } catch (error) {}
};

// Create middleware to verify then to do
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization; // auth header has template:Bear token
  if(authHeader) {
    const accessToken = authHeader.split(" ")[1]
    jwt.verify(accessToken, process.env.accessToken,(error, data)=>{
      error && res.status(401).json("Token is invalid")
      req.user = data
      next()
    })
  } else {
    res.status(400).json("You are not authenticated")
  }
}

export const refreshToken = (req, res) => {
  const refresh_token = req.body.refreshToken
  if (!refreshToken) return res.status(401).json("you are not authen")
  
}