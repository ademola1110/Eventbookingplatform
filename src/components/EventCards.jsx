import React from "react";
import { events } from "../data/events";
import { useState } from "react";
import { Link } from "react-router-dom";

function Events() {
  const [search, setSearch] = useState("");

  // Filter events based on search input
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen py-12 px-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800">Upcoming Events</h1>

        <p className="text-gray-500 mt-3 text-lg">
          Discover amazing events happening around you
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search event by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm text-gray-700"
        />
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-60 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {event.category}
                </span>

                {/* Event Name */}
                <h2 className="text-2xl font-bold text-gray-800 mt-4">
                  {event.name}
                </h2>

                {/* Description */}
                {/* <p className="text-gray-500 mt-3 line-clamp-3">
                  {event.description}
                </p> */}

                {/* Date */}
                <div className="flex items-center gap-2 mt-5 text-gray-600">
                  <span>📅</span>
                  <p>{event.date}</p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 mt-2 text-gray-600">
                  <span>📍</span>
                  <p>{event.location}</p>
                </div>

                {/* Button */}
                <Link
                  to={`/events/${event.id}`}
                  className="mt-6 inline-block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-xl">
            No event found
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
