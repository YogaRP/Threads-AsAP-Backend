import express from "express";
import {
  followUnfollowUser,
  getSuggestedUsers,
  getUserProfile,
  loginUser,
  logoutUser,
  signUpUser,
  updateUser,
} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/profile/:query", getUserProfile);
router.get("/suggested", protectRoute, getSuggestedUsers);
router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnfollowUser); // Toggle state(follow/unfollow)
router.put("/update/:id", protectRoute, updateUser);

export default router;
