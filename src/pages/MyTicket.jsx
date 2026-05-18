import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";


function MyTicket() {
  const [tickets, setTickets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Load tickets ONLY
  useEffect(() => {
    const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];

    setTickets(savedTickets);
  }, []);

  
  const cancelTicket = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const confirmCancel = () => {
    const updatedTickets = tickets.filter((_, i) => i !== selectedIndex);

    setTickets(updatedTickets);

    localStorage.setItem("tickets", JSON.stringify(updatedTickets));

    window.dispatchEvent(new Event("ticketUpdated"));

    setShowModal(false);
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
                  <span className="font-semibold pl-5">Quantity:</span>{" "}
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
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* CONFIRM MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl w-[90%] max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">Delete Ticket?</h2>

            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this ticket?
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-300 py-3 rounded-xl font-semibold"
              >
                No
              </button>

              <button
                onClick={confirmCancel}
                className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyTicket;
