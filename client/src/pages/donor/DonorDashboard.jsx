import { useEffect, useState } from "react";
import API from "../../services/api";
import CreateDonationForm from "../../components/CreateDonationForm";
import Navbar from "../../components/Navbar";

const DonorDashboard = () => {
const [user, setUser] = useState(null);
const [donations, setDonations] = useState([]);

useEffect(() => {
const storedUser = JSON.parse(
localStorage.getItem("user")
);


setUser(storedUser);

fetchDonations();


}, []);

const fetchDonations = async () => {
try {
const res = await API.get("/donations/my");
setDonations(res.data.donations);
} catch (error) {
console.error(error);
}
};

const pendingCount = donations.filter(
(d) => d.status === "Pending"
).length;

const deliveredCount = donations.filter(
(d) => d.status === "Delivered"
).length;

return (
<> <Navbar />


  <div className="min-h-screen bg-slate-50">

    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl p-8 text-white shadow-xl mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Welcome Back, {user?.name}
        </h1>

        <p className="text-green-100">
          Manage your donations and track your impact.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all">
          <h3 className="text-gray-500 font-medium">
            Total Donations
          </h3>

          <p className="text-5xl font-bold text-emerald-600 mt-3">
            {donations.length}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all">
          <h3 className="text-gray-500 font-medium">
            Pending
          </h3>

          <p className="text-5xl font-bold text-yellow-500 mt-3">
            {pendingCount}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all">
          <h3 className="text-gray-500 font-medium">
            Delivered
          </h3>

          <p className="text-5xl font-bold text-blue-600 mt-3">
            {deliveredCount}
          </p>
        </div>

      </div>

      {/* Donation Form */}
      <CreateDonationForm
        onDonationCreated={fetchDonations}
      />

      {/* My Donations */}
      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            My Donations
          </h2>
        </div>

        {donations.length === 0 ? (

          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No donations found.
            </p>
          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-6">

            {donations.map((donation) => (
              <div
                key={donation._id}
                className="border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
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

                </div>

                <div className="mt-5">

                  <span
                    className={`px-4 py-2 rounded-full text-white text-sm font-semibold
                    ${
                      donation.status === "Pending"
                        ? "bg-yellow-500"
                        : donation.status === "Accepted"
                        ? "bg-blue-500"
                        : donation.status === "Picked Up"
                        ? "bg-orange-500"
                        : "bg-green-600"
                    }`}
                  >
                    {donation.status}
                  </span>

                </div>

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

export default DonorDashboard;
