import { useEffect, useState } from "react";
import API from "../../services/api";
import Navbar from "../../components/Navbar";

const AdminDashboard = () => {
const [stats, setStats] = useState({});
const [pendingNGOs, setPendingNGOs] = useState([]);

useEffect(() => {
fetchStats();
fetchPendingNGOs();
}, []);

const fetchStats = async () => {
try {
const res = await API.get("/admin/stats");
setStats(res.data.stats || {});
} catch (error) {
console.error(error);
}
};

const fetchPendingNGOs = async () => {
try {
const res = await API.get("/admin/pending-ngos");
setPendingNGOs(res.data.ngos || []);
} catch (error) {
console.error(error);
}
};

const approveNGO = async (id) => {
try {
await API.put(`/admin/approve-ngo/${id}`);


  alert("NGO Approved Successfully");

  fetchPendingNGOs();
  fetchStats();
} catch (error) {
  console.error(error);
  alert("Failed to Approve NGO");
}


};

return (
<> <Navbar />


  <div className="min-h-screen bg-slate-50">

    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl p-8 text-white shadow-xl mb-8">

        <h1 className="text-4xl font-bold mb-2">
          Admin Dashboard
        </h1>

        <p className="text-green-100">
          Manage users, NGOs, and donations across the platform.
        </p>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-all">
          <p className="text-gray-500 font-medium">
            Total Users
          </p>

          <h2 className="text-5xl font-bold text-blue-600 mt-3">
            {stats.totalUsers || 0}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-all">
          <p className="text-gray-500 font-medium">
            Total Donors
          </p>

          <h2 className="text-5xl font-bold text-emerald-600 mt-3">
            {stats.totalDonors || 0}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-all">
          <p className="text-gray-500 font-medium">
            Total NGOs
          </p>

          <h2 className="text-5xl font-bold text-orange-500 mt-3">
            {stats.totalNGOs || 0}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-all">
          <p className="text-gray-500 font-medium">
            Total Donations
          </p>

          <h2 className="text-5xl font-bold text-purple-600 mt-3">
            {stats.totalDonations || 0}
          </h2>
        </div>

      </div>

      {/* NGO Approvals */}
      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex items-center justify-between mb-8">

          <div>
            <h2 className="text-3xl font-bold">
              Pending NGO Approvals
            </h2>

            <p className="text-gray-500 mt-1">
              Review and approve new NGO registrations.
            </p>
          </div>

          <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl font-semibold">
            {pendingNGOs.length} Pending
          </div>

        </div>

        {pendingNGOs.length === 0 ? (

          <div className="text-center py-12">

            <h3 className="text-xl font-semibold text-gray-700">
              No Pending NGOs
            </h3>

            <p className="text-gray-500 mt-2">
              All NGO registrations have been reviewed.
            </p>

          </div>

        ) : (

          <div className="space-y-5">

            {pendingNGOs.map((ngo) => (

              <div
                key={ngo._id}
                className="border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-lg transition-all"
              >

                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {ngo.organizationName}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {ngo.email}
                  </p>
                </div>

                <button
                  onClick={() => approveNGO(ngo._id)}
                  className="mt-4 md:mt-0 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  Approve NGO
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

export default AdminDashboard;
