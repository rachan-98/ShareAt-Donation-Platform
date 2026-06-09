const express = require("express");

const {
  createDonation,
  getMyDonations,
  getAvailableDonations,
  acceptDonation,
  updateDonationStatus,
  getDonationById,
} = require("../controllers/donationController");

const { protect } = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("donor"),
  createDonation
);

router.get(
  "/my",
  protect,
  authorizeRoles("donor"),
  getMyDonations
);

router.get(
  "/available",
  protect,
  authorizeRoles("ngo"),
  getAvailableDonations
);

router.put(
  "/:id/accept",
  protect,
  authorizeRoles("ngo"),
  acceptDonation
);

router.put(
  "/:id/status",
  protect,
  authorizeRoles("ngo"),
  updateDonationStatus
);

router.get(
  "/:id",
  protect,
  getDonationById
);

module.exports = router;