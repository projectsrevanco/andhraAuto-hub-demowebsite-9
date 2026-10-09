import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, BadgeCheck, Fuel, Settings2, Gauge, Calendar, 
  Car, Users, ShieldCheck, CheckCircle2, Calculator, CalendarCheck 
} from 'lucide-react';
import { ALL_VEHICLES } from '../data/vehicles';

export default function VehicleDetails() {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  
  // Find vehicle or return first as fallback for demo
  const vehicle = ALL_VEHICLES.find(v => v.id === Number(id)) || ALL_VEHICLES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const images = vehicle.gallery || [vehicle.image];

  return (
    <div className="bg-gray-light min-h-screen pb-20">
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <Link to="/vehicles" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors text-sm font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Inventory
          </Link>
        </div>
      </div>

      <div className="container-custom pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Gallery & Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Image Gallery */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              {/* Main Image */}
              <div className="aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] overflow-hidden rounded-lg mb-4 bg-gray-100">
                <img 
                  src={images[activeImage]} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
                {images.map((img, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-[4/3] rounded-md overflow-hidden border-2 transition-all ${
                      activeImage === index ? 'border-accent opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Key Specifications */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-primary mb-6">Key Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm mb-1 flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Year</span>
                  <span className="font-semibold text-gray-800">{vehicle.name.split(' ')[0]}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm mb-1 flex items-center gap-1.5"><Fuel className="h-4 w-4" /> Fuel</span>
                  <span className="font-semibold text-gray-800">{vehicle.fuel}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm mb-1 flex items-center gap-1.5"><Settings2 className="h-4 w-4" /> Transmission</span>
                  <span className="font-semibold text-gray-800">{vehicle.transmission}</span>
                </div>
                {vehicle.mileage && (
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm mb-1 flex items-center gap-1.5"><Gauge className="h-4 w-4" /> Mileage</span>
                    <span className="font-semibold text-gray-800">{vehicle.mileage}</span>
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm mb-1 flex items-center gap-1.5"><Car className="h-4 w-4" /> Body Type</span>
                  <span className="font-semibold text-gray-800">{vehicle.bodyType || 'SUV'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm mb-1 flex items-center gap-1.5"><Settings2 className="h-4 w-4" /> Engine</span>
                  <span className="font-semibold text-gray-800">{vehicle.engine || '2.0L Standard'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm mb-1 flex items-center gap-1.5"><Users className="h-4 w-4" /> Seating</span>
                  <span className="font-semibold text-gray-800">{vehicle.seating || 5} Seats</span>
                </div>
              </div>
            </div>

            {/* Vehicle Verification Prominent Section */}
            <div className="bg-gradient-to-br from-[#0f284c] to-primary p-1 rounded-lg shadow-lg">
              <div className="bg-white rounded-lg p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <ShieldCheck className="h-8 w-8 text-accent" />
                  <h2 className="text-2xl font-bold text-primary">Vehicle Verification</h2>
                </div>
                
                <p className="text-gray-600 mb-6">
                  This vehicle has passed our comprehensive verification process to ensure absolute transparency and peace of mind for your purchase.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                    <span className="font-medium text-gray-800">Ownership Verified</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                    <span className="font-medium text-gray-800">Vehicle History Checked</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                    <span className="font-medium text-gray-800">Service Records Available</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                    <span className="font-medium text-gray-800">Inspection Completed</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                    <span className="font-medium text-gray-800">Insurance Status Verified</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* History Summary Placeholder */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-primary mb-4">Vehicle History Summary</h2>
              <p className="text-gray-600 leading-relaxed">
                This {vehicle.isNew ? 'brand new' : 'pre-owned'} {vehicle.name} has a clear history. {vehicle.isNew ? 'It is fresh from the factory with full manufacturer warranty and zero prior owners.' : 'It has been meticulously maintained by its previous owner. All scheduled maintenance has been completed at authorized service centers, and there are no reported accidents or major damages.'}
              </p>
            </div>

          </div>

          {/* Right Column: Pricing & CTAs */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 sticky top-24">
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase text-white shadow-sm ${vehicle.isNew ? 'bg-primary' : 'bg-gray-800'}`}>
                  {vehicle.isNew ? 'Brand New' : 'Pre-Owned'}
                </span>
                {!vehicle.isNew && (
                  <span className="px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase bg-green-600 text-white shadow-sm flex items-center gap-1">
                    <BadgeCheck className="h-3.5 w-3.5" /> Verified
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">{vehicle.brand}</p>
              <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                {vehicle.name}
              </h1>

              <div className="text-4xl font-bold text-accent mb-6 pb-6 border-b border-gray-100">
                {vehicle.price}
                <span className="block text-sm text-gray-400 font-normal mt-1">Ex-showroom Price</span>
              </div>

              <div className="space-y-3 mb-8">
                <button className="w-full btn-primary py-3.5 text-base flex justify-center items-center gap-2">
                  <CalendarCheck className="h-5 w-5" /> Book a Test Drive
                </button>
                <button className="w-full btn-secondary py-3.5 text-base">
                  Request More Information
                </button>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3">
                  <Calculator className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-primary mb-1">Need Financing?</h4>
                    <p className="text-sm text-gray-600 mb-2">We offer transparent financing options with competitive interest rates.</p>
                    <a href="#" className="text-accent font-medium text-sm hover:underline">Calculate EMI</a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
