import { useEffect, useState } from "react";
import API from "../../services/api";
import Navbar from "../../components/Navbar";

const NGODashboard = () => {
const [donations, setDonations] = useState([]);

useEffect(() => {
fetchDonations();
}, []);

const fetchDonations = async () => {
try {
const res = await API.get("/donations/available");
setDonations(res.data.donations || []);
} catch (error) {
console.error(error);
}
};

const acceptDonation = async (id) => {
try {
await API.put(`/donations/${id}/accept`);


  alert("Donation Accepted Successfully");

  fetchDonations();
} catch (error) {
  console.error(error);
  alert("Failed to Accept Donation");
}


};

return (
<> <Navbar />


  <div className="min-h-screen bg-slate-50">

    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Hero */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl p-8 text-white shadow-xl mb-8">

        <h1 className="text-4xl font-bold mb-2">
          NGO Dashboard
        </h1>

        <p className="text-green-100">
          Review and accept donations from donors.
        </p>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all">
          <h3 className="text-gray-500 font-medium">
            Available Donations
          </h3>

          <p className="text-5xl font-bold text-emerald-600 mt-3">
            {donations.length}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all">
          <h3 className="text-gray-500 font-medium">
            Categories
          </h3>

          <p className="text-5xl font-bold text-blue-600 mt-3">
            {new Set(donations.map(d => d.category)).size}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all">
          <h3 className="text-gray-500 font-medium">
            NGO Portal
          </h3>

          <p className="text-5xl mt-3">
            🏢
          </p>
        </div>

      </div>

      {/* Donations */}
      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-3xl font-bold mb-8">
          Available Donations
        </h2>

        {donations.length === 0 ? (

          <div className="text-center py-12">

            <p className="text-gray-500 text-lg">
              No Available Donations
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-6">

            {donations.map((donation) => (

              <div
                key={donation._id}
                className="border border-slate-200 rounded-3xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >

                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {donation.title}
                </h3>

                <div className="space-y-2 text-gray-600">

                  <p>
                    <span className="font-semibold">
                      Category:
                    </span>{" "}
                    {donation.category}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Quantity:
                    </span>{" "}
                    {donation.quantity}
                  </p>

                  {donation.donor?.name && (
                    <p>
                      <span className="font-semibold">
                        Donor:
                      </span>{" "}
                      {donation.donor.name}
                    </p>
                  )}

                  {donation.pickupAddress && (
                    <p>
                      <span className="font-semibold">
                        Address:
                      </span>{" "}
                      {donation.pickupAddress}
                    </p>
                  )}

                </div>

                <button
                  onClick={() =>
                    acceptDonation(donation._id)
                  }
                  className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition-all"
                >
                  Accept Donation
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  </div>
</>


);
};

export default NGODashboard;
