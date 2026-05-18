import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [ticketCount, setTicketCount] = useState(0);

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];

    setTicketCount(tickets.length);
  }, []);

  return (
    <div className="flex gap-5 justify-between bg-purple-600 md:px-10 py-5 px-7">
      <div className="text-white font-bold text-xl">TicketNG</div>
      <div className="flex gap-10 text-white">
        <p>
          <Link to="/">Home</Link>
        </p>

        <p>
          <Link to="/events">Events</Link>
        </p>
        {/* Ticket Link */}

        <Link
          to="/tickets"
          className="relative font-semibold text-white"
        >
          Tickets
          {/* Count Badge */}
          {ticketCount > 0 && (
            <span className="absolute -top-3 -right-5 bg-white text-purple-600 text-xs w-6 h-6 flex items-center justify-center rounded-full">
              {ticketCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
