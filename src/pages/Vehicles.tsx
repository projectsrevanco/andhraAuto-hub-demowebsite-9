import { useState } from 'react';
import { 
  Search, SlidersHorizontal, ChevronDown, X,
  BadgeCheck, Calendar, Fuel, Settings2, Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_VEHICLES } from '../data/vehicles';

export default function Vehicles() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(6);
  
  const handleLoadMore = () => {
    setDisplayedCount(prev => Math.min(prev + 3, ALL_VEHICLES.length));
  };

  const displayedVehicles = ALL_VEHICLES.slice(0, displayedCount);
  const hasMore = displayedCount < ALL_VEHICLES.length;

  return (
    <div className="bg-gray-light min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Vehicle</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Browse verified new and pre-owned vehicles with transparent information.
          </p>
        </div>
      </div>

      <div className="container-custom pt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <span className="font-bold text-primary">Filters</span>
            <button 
              onClick={() => setIsMobileFiltersOpen(true)}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Open Filters
            </button>
          </div>

          {/* Filter Sidebar (Desktop) & Drawer (Mobile) */}
          <div className={`
            fixed inset-0 z-50 bg-black/50 lg:bg-transparent lg:static lg:z-auto
            ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}
          `}>
            <div className={`
              fixed lg:static top-0 right-0 h-full w-[85%] sm:w-96 lg:w-72 
              bg-white lg:bg-transparent shadow-lg lg:shadow-none 
              overflow-y-auto lg:overflow-visible transition-transform duration-300
              ${isMobileFiltersOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
            `}>
              <div className="bg-white p-6 rounded-lg border border-gray-100 lg:shadow-sm">
                
                <div className="flex items-center justify-between mb-6 lg:hidden">
                  <h2 className="text-xl font-bold text-primary">Filters</h2>
                  <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>

                <div className="hidden lg:block mb-6">
                  <h2 className="text-xl font-bold text-primary">Filters</h2>
                </div>

                {/* Filter Sections */}
                <div className="space-y-6">
                  
                  {/* Condition */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Condition</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
                        <span className="text-gray-700">New Vehicles</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
                        <span className="text-gray-700">Pre-Owned Vehicles</span>
                      </label>
                    </div>
                  </div>

                  {/* Brand */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Brand</h3>
                    <div className="space-y-2">
                      {['Hyundai', 'Kia', 'Tata', 'Toyota', 'Mahindra', 'Maruti Suzuki'].map(brand => (
                        <label key={brand} className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
                          <span className="text-gray-700">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Price</h3>
                    <div className="space-y-2">
                      {['Under ₹10 Lakhs', '₹10 - ₹15 Lakhs', '₹15 - ₹20 Lakhs', 'Over ₹20 Lakhs'].map(range => (
                        <label key={range} className="flex items-center gap-3 cursor-pointer">
                          <input type="radio" name="price" className="w-4 h-4 text-accent border-gray-300 focus:ring-accent" />
                          <span className="text-gray-700">{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Fuel */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Fuel</h3>
                    <div className="space-y-2">
                      {['Petrol', 'Diesel', 'Electric', 'Hybrid'].map(fuel => (
                        <label key={fuel} className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
                          <span className="text-gray-700">{fuel}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Transmission */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Transmission</h3>
                    <div className="space-y-2">
                      {['Manual', 'Automatic'].map(trans => (
                        <label key={trans} className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
                          <span className="text-gray-700">{trans}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                </div>

                <button className="w-full btn-primary mt-8 py-3">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            
            {/* Search and Sort Bar */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by make, model, or year..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
                  Showing 1-{displayedVehicles.length} of {ALL_VEHICLES.length}
                </span>
                
                <div className="relative">
                  <select className="pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent appearance-none cursor-pointer text-sm font-medium">
                    <option>Sort by: Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Year: Newest</option>
                    <option>Mileage: Low to High</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {displayedVehicles.map((vehicle) => (
                <div key={vehicle.id} className="card group flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="mb-2">
                      <p className="text-xs text-gray-500 font-bold tracking-wider uppercase mb-1">{vehicle.brand}</p>
                      <h3 className="text-lg font-bold text-primary line-clamp-1">{vehicle.name}</h3>
                    </div>

                    <div className="text-xl font-bold text-accent mb-5">
                      {vehicle.price}
                    </div>

                    {/* Vehicle Stats Grid */}
                    <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs text-gray-600 mb-6 mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <Fuel className="h-4 w-4 text-gray-400" />
                        <span className="truncate">{vehicle.fuel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Settings2 className="h-4 w-4 text-gray-400" />
                        <span className="truncate">{vehicle.transmission}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="truncate">{vehicle.name.split(' ')[0]}</span>
                      </div>
                      {vehicle.mileage && (
                        <div className="flex items-center gap-2">
                          <Gauge className="h-4 w-4 text-gray-400" />
                          <span className="truncate">{vehicle.mileage}</span>
                        </div>
                      )}
                    </div>

                    {/* View Details Button */}
                    <Link 
                      to={`/vehicles/${vehicle.id}`} 
                      className="w-full btn-secondary py-2 mt-auto group-hover:bg-primary group-hover:text-white transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="flex justify-center">
                <button 
                  onClick={handleLoadMore}
                  className="bg-white border-2 border-primary text-primary font-bold py-3 px-10 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm"
                >
                  Load More Vehicles
                </button>
              </div>
            )}
            {!hasMore && (
              <div className="text-center text-gray-500 font-medium">
                You've viewed all available vehicles.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
