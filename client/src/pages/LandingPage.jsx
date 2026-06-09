import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <div className="bg-slate-50">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white">

          <div className="max-w-7xl mx-auto px-6 py-28">

            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <div>

                <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  🌍 Trusted Donation Platform
                </span>

                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                  Make Every
                  <span className="block text-emerald-200">
                    Donation Count
                  </span>
                </h1>

                <p className="text-xl text-green-100 leading-relaxed mb-10 max-w-xl">
                  Connect with verified NGOs and donate clothes,
                  books, furniture, and household essentials to
                  people who truly need them.
                </p>

                <div className="flex flex-wrap gap-5">

                  <Link
                    to="/register"
                    className="bg-white text-emerald-700 px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
                  >
                    Start Donating
                  </Link>

                  <Link
                    to="/login"
                    className="border-2 border-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-emerald-700 hover:scale-110 transition-all duration-300"
                  >
                    Login
                  </Link>

                </div>

              </div>

              {/* RIGHT */}
              <div className="flex justify-center">

                <div
                  className="
                    bg-white/10
                    backdrop-blur-md
                    rounded-3xl
                    p-10
                    shadow-2xl
                    hover:-translate-y-3
                    hover:scale-105
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  <div className="text-center">

                    <div className="text-8xl mb-6">
                      🎁
                    </div>

                    <h3 className="text-3xl font-bold mb-3">
                      Donate With Purpose
                    </h3>

                    <p className="text-green-100 text-lg">
                      Every unused item can create
                      meaningful impact in someone's life.
                    </p>

                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* STATS */}
        <section className="bg-white py-16">

          <div className="max-w-6xl mx-auto px-6">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              <div className="bg-white rounded-3xl p-8 shadow-md hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 text-center">
                <h3 className="text-5xl font-bold text-emerald-600">
                  10K+
                </h3>
                <p className="text-gray-600 mt-3">
                  Items Donated
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-md hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 text-center">
                <h3 className="text-5xl font-bold text-emerald-600">
                  500+
                </h3>
                <p className="text-gray-600 mt-3">
                  Verified NGOs
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-md hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 text-center">
                <h3 className="text-5xl font-bold text-emerald-600">
                  8K+
                </h3>
                <p className="text-gray-600 mt-3">
                  Families Helped
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-md hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 text-center">
                <h3 className="text-5xl font-bold text-emerald-600">
                  25+
                </h3>
                <p className="text-gray-600 mt-3">
                  Cities Covered
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-slate-50">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-5xl font-bold text-center mb-4">
              How It Works
            </h2>

            <p className="text-center text-gray-600 text-lg mb-16">
              A simple and transparent process from donation to delivery.
            </p>

            <div className="grid md:grid-cols-4 gap-8">

              <div className="bg-white p-8 rounded-3xl shadow-md hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="text-6xl mb-5">🎁</div>
                <h3 className="text-2xl font-bold mb-3">
                  Create Donation
                </h3>
                <p className="text-gray-600">
                  List clothes and household items you no longer use.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="text-6xl mb-5">🤝</div>
                <h3 className="text-2xl font-bold mb-3">
                  NGO Review
                </h3>
                <p className="text-gray-600">
                  Verified NGOs review and accept donations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="text-6xl mb-5">🚚</div>
                <h3 className="text-2xl font-bold mb-3">
                  Pickup
                </h3>
                <p className="text-gray-600">
                  Schedule a convenient doorstep pickup.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="text-6xl mb-5">❤️</div>
                <h3 className="text-2xl font-bold mb-3">
                  Delivered
                </h3>
                <p className="text-gray-600">
                  Donations reach families and communities in need.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-white py-24">

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div className="bg-emerald-50 rounded-3xl p-16 text-center shadow-lg hover:-translate-y-3 transition-all duration-300">

              <div className="text-9xl">
                🌱
              </div>

            </div>

            <div>

              <h2 className="text-5xl font-bold mb-8">
                Why Choose ShareAt?
              </h2>

              <div className="space-y-5 text-lg">

                <p>✅ Verified NGO Network</p>

                <p>✅ Transparent Donation Tracking</p>

                <p>✅ Doorstep Collection Service</p>

                <p>✅ Sustainable Reuse & Recycling</p>

                <p>✅ Community Driven Impact</p>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-24">

          <div className="max-w-4xl mx-auto text-center px-6">

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>

            <p className="text-xl text-green-100 mb-10">
              Join thousands of donors creating real social impact.
            </p>

            <Link
              to="/register"
              className="inline-block bg-white text-emerald-700 px-10 py-5 rounded-2xl text-lg font-bold hover:scale-110 hover:shadow-2xl transition-all duration-300"
            >
              Join ShareAt Today
            </Link>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white py-10">

          <div className="max-w-6xl mx-auto px-6 text-center">

            <h3 className="text-3xl font-bold mb-3">
              ShareAt 💚
            </h3>

            <p className="text-gray-400">
              Donate. Reuse. Change Lives.
            </p>

            <div className="border-t border-gray-700 mt-6 pt-6 text-gray-500">
              © 2026 ShareAt. All Rights Reserved.
            </div>

          </div>

        </footer>

      </div>
    </>
  );
};

export default LandingPage;