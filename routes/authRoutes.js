import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// example protected route
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Protected route working",
    user: req.user
  });
});

export default router;
