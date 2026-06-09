const express = require("express");

const {
  getPendingNGOs,
  approveNGO,
  getAdminStats,
} = require("../controllers/adminController");

const { protect } = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
  "/ngos",
  protect,
  authorizeRoles("admin"),
  getPendingNGOs
);

router.put(
  "/ngos/:id/approve",
  protect,
  authorizeRoles("admin"),
  approveNGO
);

router.get(
  "/stats",
  protect,
  authorizeRoles("admin"),
  getAdminStats
);

module.exports = router;