import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import VehicleDetails from './pages/VehicleDetails';
import VehicleVerification from './pages/VehicleVerification';
import Services from './pages/Services';
import BookService from './pages/BookService';
import DigitalEstimate from './pages/DigitalEstimate';
import SpareParts from './pages/SpareParts';
import RoadsideAssistance from './pages/RoadsideAssistance';
import Insurance from './pages/Insurance';
import ServiceHistory from './pages/ServiceHistory';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="vehicles/:id" element={<VehicleDetails />} />
          <Route path="verification" element={<VehicleVerification />} />
          <Route path="services" element={<Services />} />
          <Route path="estimate" element={<DigitalEstimate />} />
          <Route path="spare-parts" element={<SpareParts />} />
          <Route path="roadside-assistance" element={<RoadsideAssistance />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="history" element={<ServiceHistory />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-service" element={<BookService />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
