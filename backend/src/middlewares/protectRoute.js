import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth({ signInUrl: "/sign-in" }),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;
      if (!clerkId) return res.status(401).send("Unauthorized - Invalid Token");

      const user = await User.findOne({ clerkId });
      if (!user) return res.status(404).send("User not found");

      req.user = user;
      next();
    } catch (error) {
      console.error("Internal server error: ", error);
    }
  },
];
