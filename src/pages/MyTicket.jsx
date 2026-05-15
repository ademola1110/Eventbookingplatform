import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function MyTicket() {
  const [tickets, setTickets] = useState([]);

  // Load tickets ONLY
  useEffect(() => {
    const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];

    setTickets(savedTickets);
  }, []);

  // Cancel ticket
  const cancelTicket = (index) => {
    const updatedTickets = tickets.filter((_, i) => i !== index);

    setTickets(updatedTickets);

    localStorage.setItem("tickets", JSON.stringify(updatedTickets));

    window.dispatchEvent(new Event("ticketUpdated"));
  };

  if (tickets.length === 0) {
    return (
      <div>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-bold text-gray-700">
            No Tickets Booked Yet
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bol text-center mb-10">
          Tickets Successfully Booked
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => {
            const qrData = JSON.stringify({
              name: ticket.customer.name,
              event: ticket.event.name,
              type: ticket.customer.ticketType,
              quantity: ticket.customer.quantity,
              total: ticket.total,
            });

            return (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-6">
                <img
                  src={ticket.event.image}
                  className="w-full h-60 object-cover rounded-2xl"
                  alt={ticket.event.name}
                />
                <h2 className="text-2xl font-bold mt-4">{ticket.event.name}</h2>
                <p className="mt-2">{ticket.customer.name}</p>
                <p className="mt-2 font-bold uppercase text-purple-600">
                  {ticket.customer.ticketType}
                </p>
                <span>📅 {ticket.event.date}</span>
                <span className="pl-25">⏰ {ticket.event.time}</span>
                <p>
                  <span>📍 {ticket.event.location}</span>
                  <span className="font-semibold pl-17">Quantity:</span>{" "}
                  {ticket.customer.quantity}{" "}
                </p>

                {/* QR CODE */}
                <div className="mt-6 flex flex-col items-center">
                  <QRCodeCanvas value={qrData} size={140} />

                  <p className="text-sm text-gray-500 mt-2">
                    Scan for verification
                  </p>
                </div>
                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <button className="flex-1 bg-purple-600 text-white py-2 rounded-xl">
                    Download
                  </button>

                  <button
                    onClick={() => cancelTicket(index)}
                    className="flex-1 bg-red-500 text-white py-2 rounded-xl"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyTicket;
