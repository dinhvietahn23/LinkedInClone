import mongoose from "mongoose";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//update user
export const updateUser = async (req, res) => {
  if (req.body.id === req.params.id || req.boody.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Update user success");
    } catch (error) {
      res.status(400).json("Update user failed");
    }
  } else {
    res.status(400).json("You can update only your account");
  }
};

// delete user
export const deleteUser = async (req, res) => {
  if (req.body.id === req.params.id || req.boody.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete user success");
    } catch (error) {
      res.status(400).json("Delete user failed");
    }
  } else {
    res.status(400).json("You can delete only your account");
  }
};

// get user by param
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status.json({ "Done found:": user });
  } catch (error) {
    res.status(400).json("Not exist user");
  }
};

// get following
export const getFollowing = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const followings = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    res.status(200).json(followings);
  } catch (error) {
    res.status(400).json(error);
  }
};
// get follower
export const getFollowers = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const followers = await Promise.all(
      user.followers.map((friendId) => {
        return User.findById(friendId);
      })
    );
    res.status(200).json(followers);
  } catch (error) {
    res.status(400).json(error);
  }
};

// follow user
export const followUser = async (req, res) => {
  if (req.body.id !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const myUser = await User.findById(req.body.id);
      if (!myUser.followings.includes(req.params.id)) {
        await myUser.updateOne({
          $push: {
            followings: req.params.id,
          },
        });
        await user.updateOne({
          $push: {
            followers: req.body.id,
          },
        });
        res.status(200).json("Follow success");
      } else {
        res.status(403).json("you already follow this user");
      }
    } catch (error) {}
  } else {
    res.status(403).json("you cannot follow yourself");
  }
};

// unfollow user

export const unfollowUser = async (req, res) => {
  if (req.body.id !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const myUser = await User.findById(req.body.id);
      if (myUser.followings.includes(req.params.id)) {
        await myUser.updateOne({
          $pull: {
            followings: req.params.id,
          },
        });
        await user.updateOne({
          $pull: {
            followers: req.body.id,
          },
        });
        res.status(200).json("Unfollow success");
      } else {
        res.status(403).json("you dont follow this user");
      }
    } catch (error) {}
  } else {
    res.status(403).json("you cannot unfollow yourself");
  }
};
