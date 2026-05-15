import EventCards from "../components/EventCards";
import Navbar from "../components/Navbar";

function Events() {
  return (
    <>
    <div className="top-0 sticky z-50">
      <Navbar />
    </div>
      <div>
        <EventCards/>
      </div>
    </>
  );
}

export default Events;
