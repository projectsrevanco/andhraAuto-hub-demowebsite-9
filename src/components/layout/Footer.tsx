import { Link } from 'react-router-dom';
import { 
  Car, 
  MapPin, Phone, ChevronRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050e1d] text-gray-300 pt-16 pb-8 border-t-[6px] border-accent">
      <div className="container-custom">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6 group inline-block">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center transform group-hover:-rotate-12 transition-transform shadow-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-heading font-black text-white tracking-wider uppercase leading-none">
                  Andhra<br/><span className="text-accent">Auto Hub</span>
                </h2>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed border-l-2 border-accent pl-4">
              Verified Vehicles. Transparent Service. Reliable Support.
            </p>

          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Home</Link></li>
              <li><Link to="/vehicles" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Vehicles</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Services</Link></li>
              <li><Link to="/spare-parts" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Spare Parts</Link></li>
              <li><Link to="/roadside-assistance" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Roadside Assistance</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/vehicles" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Vehicle Sales</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Vehicle Service</Link></li>
              <li><Link to="/spare-parts" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Spare Parts</Link></li>
              <li><Link to="/insurance" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Insurance Assistance</Link></li>
              <li><Link to="/roadside-assistance" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Roadside Assistance</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Customer Support</h3>
            <ul className="space-y-3 mb-6">
              <li><Link to="/book-service" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Book a Service</Link></li>
              <li><Link to="/estimate" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Repair Estimate</Link></li>
              <li><Link to="/verification" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Vehicle Verification</Link></li>
              <li><Link to="/history" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> Service History</Link></li>
            </ul>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white font-medium">+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Andhra Auto Hub. Demo Website.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms & Conditions</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
