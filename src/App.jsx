import { Routes, Route, BrowserRouter } from "react-router-dom";
import Events from "./pages/Events";
import Home from "./pages/Home";
import MyTicket from "./pages/MyTicket";
import EventsDetails from "./pages/EventsDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/tickets" element={<MyTicket />} />
          <Route path="/events/:id" element={<EventsDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
