const Donation = require("../models/Donation");

const createDonation = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      quantity,
      condition,
      pickupAddress,
    } = req.body;

    const donation = await Donation.create({
      title,
      category,
      description,
      quantity,
      condition,
      pickupAddress,
      donor: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Donation Created Successfully",
      donation,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getMyDonations = async (req, res) => {
  try {
    const donations = await Donation.find({
      donor: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: donations.length,
      donations,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getAvailableDonations = async (req, res) => {
  try {
    const donations = await Donation.find({
      status: "Pending",
    })
      .populate("donor", "name email phone")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: donations.length,
      donations,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const acceptDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);

    if (!donation) {
      return res.status(404).json({
        success: false,
        message: "Donation Not Found",
      });
    }

    if (donation.status !== "Pending") {
      return res.status(400).json({
        success: false,
        message: "Donation is already accepted",
      });
    }

    donation.ngo = req.user._id;
    donation.status = "Accepted";

    await donation.save();

    res.status(200).json({
      success: true,
      message: "Donation Accepted Successfully",
      donation,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const updateDonationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const donation = await Donation.findById(req.params.id);

    if (!donation) {
      return res.status(404).json({
        success: false,
        message: "Donation Not Found",
      });
    }

    donation.status = status;

    await donation.save();

    res.status(200).json({
      success: true,
      message: "Status Updated Successfully",
      donation,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getDonationById = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id)
      .populate("donor", "name email")
      .populate("ngo", "name email organizationName");

    if (!donation) {
      return res.status(404).json({
        success: false,
        message: "Donation Not Found",
      });
    }

    res.status(200).json({
      success: true,
      donation,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createDonation,
  getMyDonations,
  getAvailableDonations,
  acceptDonation,
  updateDonationStatus,
  getDonationById,
}; 