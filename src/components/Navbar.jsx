import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [ticketCount, setTicketCount] = useState(0);

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];

    setTicketCount(tickets.length);
  }, []);

  

  return (
    <div className="flex items-center justify-between bg-purple-600 px-10 md:px-10 py-4">
      <div className="text-white font-bold text-xl">TicketNG</div>

      <div className="flex items-center gap-4 sm:gap-6 md:gap-10 text-white text-sm sm:text-base">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>

        <Link to="/events" className="hover:text-gray-200">
          Events
        </Link>

        <Link
          to="/tickets"
          className="relative font-semibold hover:text-gray-200"
        >
          Tickets
          {ticketCount > 0 && (
            <span className="absolute -top-2 -right-4 bg-white text-purple-600 text-xs w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full">
              {ticketCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
