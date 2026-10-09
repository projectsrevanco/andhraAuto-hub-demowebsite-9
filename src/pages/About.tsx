import { useEffect } from 'react';
import { 
  ShieldCheck, Car, Wrench, Package, ArrowRight,
  FileText, PhoneCall, Eye, Award, Headset
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES_LIST = [
  { name: 'New Vehicle Sales', icon: <Car className="h-5 w-5 text-accent" /> },
  { name: 'Used Vehicle Sales', icon: <Car className="h-5 w-5 text-accent" /> },
  { name: 'Vehicle Servicing', icon: <Wrench className="h-5 w-5 text-accent" /> },
  { name: 'Genuine Spare Parts', icon: <Package className="h-5 w-5 text-accent" /> },
  { name: 'Insurance Assistance', icon: <FileText className="h-5 w-5 text-accent" /> },
  { name: 'Roadside Assistance', icon: <PhoneCall className="h-5 w-5 text-accent" /> }
];

const APPROACH_PILLARS = [
  {
    title: 'Verification',
    description: 'Every pre-owned vehicle we sell undergoes a rigorous background check and mechanical inspection to ensure absolute peace of mind.',
    icon: <ShieldCheck className="h-10 w-10 text-primary" />
  },
  {
    title: 'Transparency',
    description: 'We eliminate surprises. From detailed vehicle histories to upfront digital repair estimates, you always know exactly what you are paying for.',
    icon: <Eye className="h-10 w-10 text-primary" />
  },
  {
    title: 'Quality',
    description: 'We use only genuine parts, deploy modern diagnostic equipment, and follow manufacturer-prescribed processes for all servicing.',
    icon: <Award className="h-10 w-10 text-primary" />
  },
  {
    title: 'Support',
    description: 'Our relationship does not end at the sale. From insurance claims to emergency roadside assistance, we are always here to help.',
    icon: <Headset className="h-10 w-10 text-primary" />
  }
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-light min-h-screen pb-20">
      
      {/* Hero Section */}
      <div className="bg-primary text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1560250059-4fbd4625b18f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Modern automotive showroom and service center" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              More Than a Dealership.<br/>
              <span className="text-accent">Your Automotive Partner.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Andhra Auto Hub is a modern, full-scale automotive business designed to handle every aspect of your vehicle's lifecycle under one roof.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom pt-16">
        
        {/* Intro & Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">A Comprehensive Automotive Ecosystem</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We bridge the gap between buying, maintaining, and supporting your vehicle. Instead of dealing with multiple unverified mechanics, spare part vendors, and third-party agencies, we provide a unified, professional environment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES_LIST.map((service, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <span className="font-semibold text-gray-800">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional mechanic inspecting a car" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-md border border-gray-100 max-w-xs hidden sm:block">
              <div className="flex items-center gap-4">
                <ShieldCheck className="h-10 w-10 text-green-600 shrink-0" />
                <p className="font-bold text-gray-800 leading-tight">Committed to absolute automotive reliability.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="bg-primary text-white rounded-3xl p-10 md:p-16 mb-24 shadow-md text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">Our Mission</h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              "Our goal is to make vehicle ownership simpler, more transparent and more trustworthy."
            </p>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Customers Choose Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our approach is built on four core pillars that define every interaction, sale, and service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {APPROACH_PILLARS.map((pillar, index) => (
              <div key={index} className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6 items-start">
                <div className="shrink-0 w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-100 rounded-lg p-10 text-center border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready to experience the difference?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            From booking your next general service to exploring our verified vehicle inventory, everything you need is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/vehicles" className="btn-primary px-8 py-4 text-lg inline-flex items-center justify-center gap-2">
              Explore Vehicles <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/services" className="bg-white border-2 border-primary text-primary hover:bg-gray-50 transition-colors font-bold px-8 py-4 text-lg rounded-md inline-flex items-center justify-center gap-2">
              Explore Our Services
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
