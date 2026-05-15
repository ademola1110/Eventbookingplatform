import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="top-0 sticky z-50">
        <Navbar />
      </div>
      <div className="bg-gray-50 min-h-screen">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
            alt="Concert"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Discover & Book Amazing Events
            </h1>

            <p className="text-gray-200 text-lg md:text-2xl mt-6 leading-relaxed">
              From concerts and festivals to tech conferences and sports events
              — book tickets easily and never miss unforgettable moments.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/events"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition duration-300"
              >
                Explore Events
              </Link>

              <Link
                to="/tickets"
                className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-2xl text-lg font-semibold transition duration-300"
              >
                My Tickets
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800">Why Choose Us?</h2>

            <p className="text-gray-500 mt-4 text-lg">
              Everything you need for seamless event booking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
              <div className="text-5xl">🎟️</div>

              <h3 className="text-2xl font-bold text-gray-800 mt-6">
                Easy Ticket Booking
              </h3>

              <p className="text-gray-500 mt-4 leading-relaxed">
                Book event tickets in seconds with a smooth and secure
                experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
              <div className="text-5xl">⚡</div>

              <h3 className="text-2xl font-bold text-gray-800 mt-6">
                Instant Confirmation
              </h3>

              <p className="text-gray-500 mt-4 leading-relaxed">
                Receive immediate ticket confirmation and keep all bookings
                organized.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
              <div className="text-5xl">🔥</div>

              <h3 className="text-2xl font-bold text-gray-800 mt-6">
                Top Trending Events
              </h3>

              <p className="text-gray-500 mt-4 leading-relaxed">
                Discover concerts, festivals, workshops, and exclusive
                experiences near you.
              </p>
            </div>
          </div>
        </section>

        {/* EVENTS PREVIEW SECTION */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16">
              <div>
                <h2 className="text-5xl font-bold text-gray-800 text-center">
                  Popular Events
                </h2>

                <p className="text-gray-500 mt-4 text-lg">
                  Explore the hottest upcoming events
                </p>
              </div>

              <Link
                to="/events"
                className="mt-6 md:mt-0 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
              >
                View All Events
              </Link>
            </div>

            {/* Event Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="rounded-3xl overflow-hidden shadow-lg bg-gray-50 hover:shadow-2xl transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
                  alt="Concert"
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                    Music
                  </span>

                  <h3 className="text-2xl font-bold text-gray-800 mt-4">
                    Summer Music Festival
                  </h3>

                  <p className="text-gray-500 mt-3">
                    Experience unforgettable live performances from top artists
                    around the world.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-3xl overflow-hidden shadow-lg bg-gray-50 hover:shadow-2xl transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865"
                  alt="Conference"
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                    Tech
                  </span>

                  <h3 className="text-2xl font-bold text-gray-800 mt-4">
                    Global Tech Conference
                  </h3>

                  <p className="text-gray-500 mt-3">
                    Meet innovators, developers, and entrepreneurs shaping the
                    future of technology.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-3xl overflow-hidden shadow-lg bg-gray-50 hover:shadow-2xl transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
                  alt="Festival"
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <span className="bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full">
                    Festival
                  </span>

                  <h3 className="text-2xl font-bold text-gray-800 mt-4">
                    City Night Festival
                  </h3>

                  <p className="text-gray-500 mt-3">
                    Enjoy amazing nightlife, food, culture, and entertainment
                    all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-purple-700 text-center px-6">
          <h2 className="text-5xl font-bold text-white">
            Ready For Your Next Experience?
          </h2>

          <p className="text-purple-100 text-lg mt-6 max-w-2xl mx-auto">
            Join thousands of users discovering and booking events effortlessly
            every day.
          </p>

          <Link
            to="/events"
            className="inline-block mt-10 bg-white hover:bg-gray-100 text-purple-700 px-8 py-4 rounded-2xl text-lg font-semibold transition duration-300"
          >
            Get Started
          </Link>
        </section>

        {/* FOOTER */}
        <footer className="bg-purple-800 text-gray-400 py-8 text-center">
          <h3 className="text-2xl font-bold text-white">TicketNG</h3>

          <p className="mt-4 text-white">
            © 2026 Eventify. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;