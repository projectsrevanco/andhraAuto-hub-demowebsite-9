import { useState, useEffect } from 'react';
import { 
  Search, ShieldCheck, CheckCircle2, AlertTriangle, Clock, 
  Settings2, Wrench
} from 'lucide-react';
import ImageWithFallback from '../components/ui/ImageWithFallback';

const CATEGORIES = [
  'All Parts',
  'Engine Parts',
  'Brake Parts',
  'Battery',
  'Filters',
  'Suspension',
  'Electrical',
  'Tyres',
  'Exterior Parts'
];

const SPARE_PARTS = [
  {
    id: 1,
    name: 'OEM Front Brake Pad Set',
    category: 'Brake Parts',
    compatible: 'Hyundai Creta, Kia Seltos',
    price: '₹ 4,500',
    warranty: '6 Months',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'High Performance 12V 60Ah Battery',
    category: 'Battery',
    compatible: 'Universal SUV (Mahindra, Tata)',
    price: '₹ 6,200',
    warranty: '24 Months',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1588691884487-7da76ef23a31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Synthetic Engine Oil Filter',
    category: 'Filters',
    compatible: 'Toyota Innova Crysta 2.4 Diesel',
    price: '₹ 850',
    warranty: 'Standard',
    availability: 'Limited Stock',
    image: 'https://images.unsplash.com/photo-1635315516942-1e967a840e69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Premium All-Season Tyre (215/60 R16)',
    category: 'Tyres',
    compatible: 'Maruti Suzuki Grand Vitara',
    price: '₹ 7,800',
    warranty: '5 Years',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1595166014498-84227928dce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Replacement Alternator Unit',
    category: 'Electrical',
    compatible: 'Tata Nexon Petrol',
    price: '₹ 12,500',
    warranty: '12 Months',
    availability: 'Available on Order',
    image: 'https://images.unsplash.com/photo-1618365287752-9f37c35e9f80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'Timing Belt Kit & Water Pump',
    category: 'Engine Parts',
    compatible: 'Mahindra XUV700 Diesel',
    price: '₹ 9,200',
    warranty: '12 Months',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1590756254033-287af0f88e7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    name: 'Front Suspension Strut Assembly',
    category: 'Suspension',
    compatible: 'Maruti Suzuki Swift',
    price: '₹ 4,100',
    warranty: '12 Months',
    availability: 'Limited Stock',
    image: 'https://images.unsplash.com/photo-1616127103730-8be36a5faee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Placeholder for suspension
  },
  {
    id: 8,
    name: 'Left Outer ORVM Assembly',
    category: 'Exterior Parts',
    compatible: 'Hyundai Creta',
    price: '₹ 5,400',
    warranty: '6 Months',
    availability: 'Available on Order',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Placeholder for exterior part
  }
];

export default function SpareParts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('All Parts');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredParts = SPARE_PARTS.filter(part => {
    const matchesCategory = activeCategory === 'All Parts' || part.category === activeCategory;
    const matchesSearch = part.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          part.compatible.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getAvailabilityBadge = (status: string) => {
    switch(status) {
      case 'In Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-green-100 text-green-700 shadow-sm border border-green-200">
            <CheckCircle2 className="h-3.5 w-3.5" /> In Stock
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-orange-100 text-orange-700 shadow-sm border border-orange-200">
            <AlertTriangle className="h-3.5 w-3.5" /> Limited Stock
          </span>
        );
      case 'Available on Order':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-700 shadow-sm border border-blue-200">
            <Clock className="h-3.5 w-3.5" /> Available on Order
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-light min-h-screen pb-20">
      
      {/* Header Section */}
      <div className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <ImageWithFallback src="https://images.unsplash.com/photo-1635315516942-1e967a840e69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Automotive parts background" className="w-full h-full object-cover object-center" />
        </div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Genuine Spare Parts</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Quality parts with clear compatibility and availability information.
          </p>
        </div>
      </div>

      <div className="container-custom pt-8">
        
        {/* Search and Filters Bar */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search parts by name or vehicle compatibility..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-medium"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar scroll-smooth">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  activeCategory === category 
                    ? 'bg-primary text-white border-primary shadow-md' 
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* Parts Grid */}
        {filteredParts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredParts.map(part => (
              <div key={part.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden group">
                
                {/* Part Image */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <ImageWithFallback src={part.image} alt={part.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    {getAvailabilityBadge(part.availability)}
                  </div>
                </div>

                {/* Part Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    {part.category}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3 leading-tight line-clamp-2">
                    {part.name}
                  </h3>
                  
                  <div className="mb-4 text-sm text-gray-600 space-y-1">
                    <p className="flex items-start gap-2">
                      <Settings2 className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2"><span className="font-medium">Fits:</span> {part.compatible}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-gray-400 shrink-0" />
                      <span><span className="font-medium">Warranty:</span> {part.warranty}</span>
                    </p>
                  </div>

                  <div className="mt-auto border-t border-gray-100 pt-4 flex flex-col gap-3">
                    <div className="text-2xl font-bold text-accent flex items-center">
                      {part.price}
                    </div>
                    <button className="w-full btn-secondary py-2 text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-12 text-center">
            <Wrench className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Parts Found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any spare parts matching "{searchQuery}" in the "{activeCategory}" category.
            </p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All Parts');}}
              className="mt-6 text-accent font-semibold hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
