import { 
  ArrowRight, ShieldCheck, Wrench, Clock, CheckCircle2, 
  Search, ChevronDown, Calculator, Award, History,
  BadgeCheck, Calendar, Fuel, Settings2, Gauge, Star, Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ALL_VEHICLES } from '../data/vehicles';
const featuredVehicles = ALL_VEHICLES.slice(0, 6);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center pb-24 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Premium car in modern showroom" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80 lg:bg-gradient-to-r lg:from-primary lg:via-primary/90 lg:to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10 py-20 lg:py-24">
          <div 
            className={`max-w-2xl transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-white text-xs font-bold tracking-widest uppercase">
                Your Trusted Automotive Partner
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Drive With <span className="text-accent">Confidence.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Verified vehicles, transparent servicing, genuine spare parts and reliable roadside support — all under one roof.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/vehicles" className="btn-primary text-base px-8 py-4">
                Explore Vehicles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/book-service" 
                className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-md hover:bg-white hover:text-primary transition-colors duration-300 flex items-center justify-center"
              >
                Book a Service
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-sm md:text-base text-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Verified Vehicles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Transparent Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Genuine Spare Parts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Service Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Search Section */}
      <section className="relative z-20 -mt-24 md:-mt-32 pb-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-gray-100 pb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Find Your Next Vehicle</h2>
                <p className="text-gray-600">Search verified new and pre-owned vehicles that match your needs.</p>
              </div>
              <Link to="/vehicles" className="text-accent font-medium hover:text-red-700 transition-colors flex items-center gap-1 group whitespace-nowrap">
                View All Vehicles <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
              <div className="flex flex-col relative">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Condition</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent appearance-none cursor-pointer font-medium">
                    <option>Any Condition</option>
                    <option>New Vehicles</option>
                    <option>Used Vehicles</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col relative">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Brand</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent appearance-none cursor-pointer font-medium">
                    <option>Any Brand</option>
                    <option>Toyota</option>
                    <option>Hyundai</option>
                    <option>Maruti Suzuki</option>
                    <option>Kia</option>
                    <option>Tata</option>
                    <option>Mahindra</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col relative">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Model</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent appearance-none cursor-pointer font-medium">
                    <option>Any Model</option>
                    <option>Fortuner</option>
                    <option>Innova Crysta</option>
                    <option>Creta</option>
                    <option>Nexon</option>
                    <option>Scorpio-N</option>
                    <option>Swift</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col relative">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Fuel Type</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent appearance-none cursor-pointer font-medium">
                    <option>Any Fuel</option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>Electric</option>
                    <option>Hybrid</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col relative">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Transmission</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent appearance-none cursor-pointer font-medium">
                    <option>Any Transmission</option>
                    <option>Manual</option>
                    <option>Automatic</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col relative">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Price Range</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent appearance-none cursor-pointer font-medium">
                    <option>Any Price</option>
                    <option>Under ₹5 Lakhs</option>
                    <option>₹5 - ₹10 Lakhs</option>
                    <option>₹10 - ₹20 Lakhs</option>
                    <option>Over ₹20 Lakhs</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="xl:col-span-6 mt-4 flex justify-end">
                <Link to="/vehicles" className="btn-primary w-full md:w-auto px-10 py-3.5 text-base">
                  <Search className="h-5 w-5 mr-2" />
                  Search Vehicles
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Featured Vehicles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover carefully selected new and pre-owned vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="card group flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badges Overlay */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className={`px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase text-white shadow-md ${vehicle.isNew ? 'bg-primary' : 'bg-gray-800'}`}>
                      {vehicle.isNew ? 'Brand New' : 'Pre-Owned'}
                    </span>
                    {!vehicle.isNew && (
                      <span className="px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase bg-green-600 text-white shadow-md flex items-center gap-1">
                        <BadgeCheck className="h-3.5 w-3.5" /> Verified
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <p className="text-sm text-gray-500 font-medium mb-1">{vehicle.brand}</p>
                    <h3 className="text-xl font-bold text-primary line-clamp-1">{vehicle.name}</h3>
                  </div>

                  <div className="text-2xl font-bold text-accent mb-6">
                    {vehicle.price}
                  </div>

                  {/* Vehicle Stats Grid */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm text-gray-600 mb-8 mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Fuel className="h-4 w-4 text-gray-400" />
                      <span>{vehicle.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings2 className="h-4 w-4 text-gray-400" />
                      <span>{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{vehicle.name.split(' ')[0]}</span>
                    </div>
                    {vehicle.mileage && (
                      <div className="flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-gray-400" />
                        <span>{vehicle.mileage}</span>
                      </div>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Link 
                    to={`/vehicles/${vehicle.id}`} 
                    className="w-full btn-secondary py-2.5 mt-auto group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link to="/vehicles" className="btn-primary px-8 py-3.5 text-base">
              View All Vehicles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Features Section */}
      <section className="section-padding bg-gray-light pt-8">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built Around Your Trust</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We make buying, servicing and maintaining your vehicle simpler, clearer and more reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/verification" className="card p-8 group block hover:-translate-y-1 transition-transform">
              <div className="bg-primary/5 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <ShieldCheck className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Verified Vehicles</h3>
              <p className="text-gray-600">
                Vehicle history and ownership information are checked before listing.
              </p>
            </Link>

            <Link to="/estimate" className="card p-8 group block hover:-translate-y-1 transition-transform">
              <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <Calculator className="h-8 w-8 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Transparent Pricing</h3>
              <p className="text-gray-600">
                Clear service estimates with parts and labour costs explained upfront.
              </p>
            </Link>

            <Link to="/spare-parts" className="card p-8 group block hover:-translate-y-1 transition-transform">
              <div className="bg-primary/5 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Wrench className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Genuine Spare Parts</h3>
              <p className="text-gray-600">
                Quality parts sourced from trusted suppliers for dependable performance.
              </p>
            </Link>

            <Link to="/services" className="card p-8 group block hover:-translate-y-1 transition-transform">
              <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <Clock className="h-8 w-8 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Faster Repairs</h3>
              <p className="text-gray-600">
                Structured service workflows help reduce unnecessary repair delays.
              </p>
            </Link>

            <Link to="/services" className="card p-8 group block hover:-translate-y-1 transition-transform">
              <div className="bg-primary/5 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Award className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Service Warranty</h3>
              <p className="text-gray-600">
                Eligible services and repairs are backed by clear warranty coverage.
              </p>
            </Link>

            <Link to="/history" className="card p-8 group block hover:-translate-y-1 transition-transform">
              <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <History className="h-8 w-8 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Complete Service History</h3>
              <p className="text-gray-600">
                Keep your vehicle's maintenance and repair history organized in one place.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here is what people think about our transparent approach.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible no-scrollbar">
            
            {/* Testimonial 1 */}
            <div className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto bg-gray-50 p-8 rounded-lg border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-gray-200" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic relative z-10">
                "I bought a pre-owned vehicle here. The vehicle verification report they provided gave me absolute confidence in my purchase. Totally transparent process."
              </p>
              <div>
                <p className="font-bold text-primary">Ramesh K.</p>
                <p className="text-sm text-gray-500">Hyundai Creta Owner</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto bg-gray-50 p-8 rounded-lg border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-gray-200" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic relative z-10">
                "First time I've ever seen a digital repair estimate before work started. No hidden fees, clear service pricing, and they only changed what was actually needed."
              </p>
              <div>
                <p className="font-bold text-primary">Suresh M.</p>
                <p className="text-sm text-gray-500">Maruti Swift Owner</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto bg-gray-50 p-8 rounded-lg border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-gray-200" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic relative z-10">
                "Quick service and they use genuine spare parts. My car runs smoother than ever. The service history dashboard is a fantastic touch to keep track of maintenance."
              </p>
              <div>
                <p className="font-bold text-primary">Anita R.</p>
                <p className="text-sm text-gray-500">Kia Seltos Owner</p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto bg-gray-50 p-8 rounded-lg border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-gray-200" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic relative z-10">
                "The staff here is incredibly helpful. I had a minor breakdown on the highway and their roadside assistance team guided me through the entire recovery process."
              </p>
              <div>
                <p className="font-bold text-primary">Vikram P.</p>
                <p className="text-sm text-gray-500">Mahindra XUV700 Owner</p>
              </div>
            </div>
            
          </div>

          <div className="text-center mt-6">
            <p className="text-xs text-gray-400 uppercase tracking-widest">
              
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary to-[#0f284c] rounded-lg border border-gray-700 p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to experience transparent automotive service?</h2>
              <p className="text-gray-300">Book your service appointment today and get a digital estimate before any work begins.</p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-end gap-4 shrink-0 max-w-xl">
              <Link to="/book-service" className="btn-primary whitespace-nowrap">
                Book a Service
              </Link>
              <Link to="/estimate" className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-md hover:bg-white hover:text-primary transition-colors duration-300 whitespace-nowrap">
                Get a Repair Estimate
              </Link>
              <Link to="/roadside-assistance" className="bg-accent/20 border-2 border-accent text-white font-medium py-3 px-8 rounded-md hover:bg-accent hover:text-white transition-colors duration-300 whitespace-nowrap">
                Roadside Assistance
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
