import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { events } from "../data/events";
import Navbar from "../components/Navbar";

function EventsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ticketType: "regular",
    quantity: 1,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const selectedEvent = events.find((item) => item.id === Number(id));

    setEvent(selectedEvent);
  }, [id]);

  if (!event) {
    return <h2>Event Not Found</h2>;
  }

  // Handle Inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 11) {
      newErrors.phone = "Phone number must be at least 11 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Price Logic
  const ticketPrice =
    formData.ticketType === "regular" ? event.regularPrice : event.vipPrice;

  const total = ticketPrice * Number(formData.quantity);

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const bookingData = {
        customer: formData,
        event,
        total,
      };

      // Get existing tickets
      const existingTickets = JSON.parse(localStorage.getItem("tickets")) || [];

      // Add new ticket
      existingTickets.push(bookingData);

      // Save back to localStorage
      localStorage.setItem("tickets", JSON.stringify(existingTickets));

      // Navigate
      navigate("/tickets");
    }
  };

  return (
    <div>
      <div className="top-0 sticky z-50">
        <Navbar />
      </div>
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* LEFT SECTION */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Smaller Image */}
            <div className="relative">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-[280px] object-cover"
              />

              {/* Category Badge */}
              <span className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
                {event.category}
              </span>
            </div>

            {/* Event Details */}
            <div className="p-8">
              <h2 className="text-4xl font-bold text-gray-800">{event.name}</h2>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-100 p-4 rounded-2xl">
                  <p className="text-sm text-gray-500">Date</p>
                  <h3 className="font-semibold text-gray-800">
                    📅 {event.date}
                  </h3>
                </div>

                <div className="bg-gray-100 p-4 rounded-2xl">
                  <p className="text-sm text-gray-500">Time</p>
                  <h3 className="font-semibold text-gray-800">
                    ⏰ {event.time}
                  </h3>
                </div>

                <div className="bg-gray-100 p-4 rounded-2xl">
                  <p className="text-sm text-gray-500">Venue</p>
                  <h3 className="font-semibold text-gray-800">
                    📍 {event.location}
                  </h3>
                </div>
              </div>

              {/* About */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  About Event
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Ticket Prices */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-purple-50 border border-purple-100 p-5 rounded-2xl">
                  <p className="text-sm text-purple-500 font-medium">
                    Regular Ticket
                  </p>

                  <h2 className="text-3xl font-bold text-purple-700 mt-2">
                    ₦{event.regularPrice}
                  </h2>
                </div>

                <div className="bg-yellow-50 border border-yellow-100 p-5 rounded-2xl">
                  <p className="text-sm text-yellow-600 font-medium">
                    VIP Ticket
                  </p>

                  <h2 className="text-3xl font-bold text-yellow-700 mt-2">
                    ₦{event.vipPrice}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Book Your Ticket
            </h2>

            <p className="text-gray-500 mb-8">
              Fill in your details to reserve your seat.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Ticket Type */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Ticket Type
                </label>

                <select
                  name="ticketType"
                  value={formData.ticketType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="regular">
                    Regular - ₦{event.regularPrice}
                  </option>

                  <option value="vip">VIP - ₦{event.vipPrice}</option>
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Quantity
                </label>

                <input
                  type="number"
                  name="quantity"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Total */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-2xl">
                <p className="text-lg opacity-90">Total Amount</p>

                <h2 className="text-4xl font-bold mt-2">₦{total}</h2>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl font-semibold transition duration-300 shadow-lg"
                >
                  Book Now
                </button>

                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="flex-1 border border-gray-300 hover:bg-gray-100 py-4 rounded-2xl font-semibold transition duration-300"
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsDetails;
