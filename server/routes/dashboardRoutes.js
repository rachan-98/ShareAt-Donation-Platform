const express = require("express");

const { protect } = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
  "/donor",
  protect,
  authorizeRoles("donor"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Donor Dashboard",
    });
  }
);

router.get(
  "/ngo",
  protect,
  authorizeRoles("ngo"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome NGO Dashboard",
    });
  }
);

router.get(
  "/admin",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin Dashboard",
    });
  }
);

module.exports = router;