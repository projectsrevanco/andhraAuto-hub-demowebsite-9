import { useState, useEffect } from 'react';
import { 
  PhoneCall, ShieldAlert, Truck, Wrench, BatteryCharging, 
  Droplets, Lock, AlertCircle, MapPin
} from 'lucide-react';
import FormField from '../components/ui/FormField';


const SERVICES = [
  {
    title: 'Emergency Towing',
    description: 'Safe and prompt towing to our service center or a location of your choice.',
    icon: <Truck className="h-8 w-8 text-white" />
  },
  {
    title: 'Flat Tyre Assistance',
    description: 'On-the-spot tyre change or puncture repair to get you moving quickly.',
    icon: <Wrench className="h-8 w-8 text-white" />
  },
  {
    title: 'Battery Jump Start',
    description: 'Quick battery boost or immediate replacement if your battery is dead.',
    icon: <BatteryCharging className="h-8 w-8 text-white" />
  },
  {
    title: 'Fuel Assistance',
    description: 'Emergency fuel delivery so you can reach the nearest gas station.',
    icon: <Droplets className="h-8 w-8 text-white" />
  },
  {
    title: 'Lockout Assistance',
    description: 'Professional help if you accidentally lock your keys inside the vehicle.',
    icon: <Lock className="h-8 w-8 text-white" />
  },
  {
    title: 'Minor Breakdown Support',
    description: 'On-site minor mechanical or electrical fixes for common issues.',
    icon: <Settings2Icon className="h-8 w-8 text-white" />
  }
];

function Settings2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 7h-9" />
      <path d="M14 17H5" />
      <circle cx="17" cy="17" r="3" />
      <circle cx="7" cy="7" r="3" />
    </svg>
  );
}

export default function RoadsideAssistance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    location: '',
    problem: 'Towing Required'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Auto-reset demo form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '', phone: '', vehicle: '', location: '', problem: 'Towing Required'
      });
    }, 5000);
  };

  return (
    <div className="bg-gray-light min-h-screen pb-20">
      
      {/* Hero Section */}
      <div className="bg-[#0a192f] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Tow truck on highway" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/90 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/20 border border-accent/50 text-accent font-bold text-sm tracking-wider uppercase mb-6">
              <ShieldAlert className="h-4 w-4" /> Emergency Support
            </div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Stranded? <br/>
              <span className="text-accent">We're Here to Help.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 border-l-4 border-accent pl-4">
              Reliable roadside assistance when you need it most.
            </p>
            
            <a href="#request-form" className="btn-primary w-full sm:w-auto px-8 py-4 text-lg inline-flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(211,47,47,0.4)] animate-pulse hover:animate-none">
              <PhoneCall className="h-5 w-5" /> Request Roadside Assistance
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Services Grid */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary mb-4">Available Support</h2>
              <p className="text-gray-600">
                Whether you have a flat tyre on the highway or a dead battery in your driveway, our team is equipped to handle a variety of roadside emergencies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICES.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-8 flex items-start gap-3 bg-blue-50 p-4 rounded-lg border border-blue-200 text-blue-800">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              <p className="text-sm font-medium">
                
              </p>
            </div>
          </div>

          {/* Emergency Request Form */}
          <div className="lg:col-span-5" id="request-form">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-accent/20 sticky top-24">
              
              <div className="bg-accent p-6 text-white text-center">
                <ShieldAlert className="h-10 w-10 mx-auto mb-3 opacity-90" />
                <h3 className="text-2xl font-bold">Request Assistance</h3>
                <p className="text-white/80 text-sm mt-1">Fill out the details for rapid dispatch</p>
              </div>

              <div className="p-6 sm:p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <PhoneCall className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h4>
                    <p className="text-gray-600 mb-6">Our emergency dispatcher is reviewing your request and will call you at <strong>{formData.phone}</strong> immediately.</p>
                    <p className="text-sm text-gray-400"></p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <FormField
                      id="name"
                      name="name"
                      label="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                    
                    <FormField
                      id="phone"
                      name="phone"
                      type="tel"
                      label="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="10-digit mobile number"
                    />

                    <FormField
                      id="vehicle"
                      name="vehicle"
                      label="Vehicle Registration Number"
                      value={formData.vehicle}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. AP 16 EA 1234"
                    />

                    <div>
                      <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1">Current Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input 
                          id="location" type="text" required name="location" value={formData.location} onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Highway mile marker, landmark, etc."
                        />
                      </div>
                    </div>

                    <FormField
                      id="problem"
                      name="problem"
                      type="select"
                      label="Problem Type"
                      value={formData.problem}
                      onChange={handleInputChange}
                      required
                      options={[
                        { value: "Towing Required", label: "Towing Required" },
                        { value: "Flat Tyre", label: "Flat Tyre" },
                        { value: "Dead Battery", label: "Dead Battery" },
                        { value: "Out of Fuel", label: "Out of Fuel" },
                        { value: "Locked Out", label: "Locked Out" },
                        { value: "Mechanical Breakdown", label: "Mechanical Breakdown" },
                        { value: "Accident / Other", label: "Accident / Other" }
                      ]}
                    />

                    <button type="submit" className="w-full btn-primary py-4 text-lg mt-4 animate-pulse hover:animate-none shadow-[0_4px_15px_rgba(211,47,47,0.3)]">
                      Dispatch Help Now
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
