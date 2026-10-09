import { useEffect } from 'react';
import { 
  CalendarCheck, ShieldCheck, Calculator, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../components/ui/ImageWithFallback';

const SERVICES = [
  {
    id: 1,
    name: 'General Service',
    description: 'Comprehensive overall checkup, fluid top-ups, and minor tune-ups to keep your vehicle running smoothly.',
    price: 'Starting from ₹ 2,999',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Oil Change',
    description: 'Premium synthetic engine oil replacement and filter change to ensure optimal engine lubrication and life.',
    price: 'Starting from ₹ 1,499',
    image: 'https://images.unsplash.com/photo-1635315516942-1e967a840e69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Brake Service',
    description: 'Brake pad replacement, rotor surfacing, and brake fluid bleeding for maximum stopping power and safety.',
    price: 'Starting from ₹ 1,299',
    image: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'AC Service',
    description: 'AC gas refill, compressor check, and cabin filter replacement for powerful, odor-free cooling.',
    price: 'Starting from ₹ 1,999',
    image: 'https://images.unsplash.com/photo-1625983794348-18e00fc394d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Battery Service',
    description: 'Battery health test, terminal cleaning, and replacement with authentic branded batteries.',
    price: 'Get Estimate',
    image: 'https://images.unsplash.com/photo-1588691884487-7da76ef23a31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'Tyre & Wheel Care',
    description: 'Computerized wheel alignment, balancing, tyre rotation, and new tyre installation.',
    price: 'Starting from ₹ 799',
    image: 'https://images.unsplash.com/photo-1595166014498-84227928dce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    name: 'Engine Diagnostics',
    description: 'Advanced OBD scanning to identify check engine light issues and electronic faults.',
    price: 'Starting from ₹ 999',
    image: 'https://images.unsplash.com/photo-1631464350325-0d29790eb7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    name: 'Body & Paint',
    description: 'Dent removal, scratch repair, and full-body paint matching using premium automotive paints.',
    price: 'Get Estimate',
    image: 'https://images.unsplash.com/photo-1552844810-0937a505fc94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 9,
    name: 'Electrical Repairs',
    description: 'Troubleshooting and fixing complex wiring issues, fuse replacements, and lighting upgrades.',
    price: 'Get Estimate',
    image: 'https://images.unsplash.com/photo-1618365287752-9f37c35e9f80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 10,
    name: 'Periodic Maintenance',
    description: 'Scheduled factory maintenance packages tailored to your specific vehicle model and mileage.',
    price: 'Get Estimate',
    image: 'https://images.unsplash.com/photo-1504423851086-1eb8a13a401c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-light min-h-screen pb-20">
      
      {/* Header Section */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Modern automotive service center" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Complete Vehicle Care <span className="text-accent">Under One Roof</span>
          </h1>
          <p className="text-xl text-gray-300">
            Professional servicing with transparent estimates and dependable support.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container-custom pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group flex flex-col h-full hover:shadow-lg transition-shadow">
              
              {/* Service Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-200 relative">
                <ImageWithFallback src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Service Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mb-4">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Price</span>
                  <span className="font-bold text-accent">{service.price}</span>
                </div>

                <Link 
                  to="/book-service" 
                  className="w-full btn-secondary py-2.5 flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  <CalendarCheck className="h-4 w-4" /> Book Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transparent Pricing Section */}
      <div className="container-custom pt-24">
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Calculator className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                No Surprises. Just Transparent Pricing.
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We believe that you should never be surprised by a repair bill. At Andhra Auto Hub, we provide upfront digital estimates for every job before any work begins.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                  <span className="font-medium text-gray-800">Detailed line-by-line cost breakdowns</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                  <span className="font-medium text-gray-800">Parts and labour clearly separated</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                  <span className="font-medium text-gray-800">No work starts without your explicit approval</span>
                </div>
              </div>

              <Link to="/book-service" className="btn-primary w-fit px-8 py-3.5">
                Get Your Digital Estimate
              </Link>
            </div>

            {/* Right Image/Graphic */}
            <div className="relative bg-primary overflow-hidden min-h-[300px] lg:min-h-full">
              <img 
                src="https://images.unsplash.com/photo-1574628286991-38e21703e73b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Service advisor explaining bill" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent lg:bg-gradient-to-l opacity-80"></div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-center items-center text-center">
                <ShieldCheck className="h-20 w-20 text-white/30 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">100% Guaranteed Work</h3>
                <p className="text-gray-300 max-w-sm">All our services and genuine parts are backed by a comprehensive service warranty.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
}

