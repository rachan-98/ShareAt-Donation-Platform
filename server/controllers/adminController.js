const User = require("../models/User");

const getPendingNGOs = async (req, res) => {
  try {
   const ngos = await User.find({
  role: "ngo",
  isApproved: false,
}).select("-password");

    res.status(200).json({
      success: true,
      count: ngos.length,
      ngos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const approveNGO = async (req, res) => {
  try {
    const ngo = await User.findById(req.params.id);

    if (!ngo) {
      return res.status(404).json({
        success: false,
        message: "NGO Not Found",
      });
    }

    ngo.isApproved = true;

    await ngo.save();

  const approvedNGO = await User.findById(ngo._id).select("-password");

res.status(200).json({
  success: true,
  message: "NGO Approved Successfully",
  ngo: approvedNGO,
});
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const Donation = require("../models/Donation");

const getAdminStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalDonors = await User.countDocuments({
      role: "donor",
    });

    const totalNGOs = await User.countDocuments({
      role: "ngo",
    });

    const totalDonations =
      await Donation.countDocuments();

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalDonors,
        totalNGOs,
        totalDonations,
      },
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
  getPendingNGOs,
  approveNGO,
  getAdminStats,
};