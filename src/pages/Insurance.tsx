import { useEffect } from 'react';
import { 
  ShieldCheck, FileText, Scale, ArrowRight, Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

const INSURANCE_SERVICES = [
  {
    title: 'Insurance Renewal',
    description: 'Get assistance with your vehicle insurance renewal.',
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Insurance Comparison',
    description: 'Understand coverage options and compare suitable plans.',
    icon: <Scale className="h-10 w-10 text-primary" />,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Claims Assistance',
    description: 'Get guidance through the insurance claim process.',
    icon: <FileText className="h-10 w-10 text-primary" />,
    image: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Insurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-light min-h-screen pb-20">
      
      {/* Hero Section */}
      <div className="bg-white py-16 lg:py-24 border-b border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <ShieldCheck className="w-full h-full object-cover" />
        </div>
        
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-6 shadow-sm border border-blue-100">
            <ShieldCheck className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Insurance Made Simpler
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get help understanding vehicle insurance, renewals and claims.
          </p>
        </div>
      </div>

      <div className="container-custom pt-16">
        
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {INSURANCE_SERVICES.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white p-2.5 rounded-lg shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-3">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/contact" className="inline-flex items-center text-accent font-bold hover:text-red-700 transition-colors group/link">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-md max-w-5xl mx-auto">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542314831-c6a4d14d8828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Guidance Navigating Your Policy?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team can help you understand the paperwork and find the right solutions for your vehicle.
            </p>
            <Link to="/contact" className="btn-primary px-10 py-4 text-lg inline-block">
              Request Insurance Assistance
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-12 flex items-start gap-4 bg-gray-100 p-6 rounded-lg border border-gray-200 text-gray-500">
          <Info className="h-6 w-6 shrink-0 mt-0.5" />
          <p className="text-sm font-medium leading-relaxed">
            <strong>Disclaimer:</strong> Andhra Auto Hub provides assistance/referral support only. We are not an insurance underwriter or provider. Final policy terms, premiums, and coverage details are exclusively determined by the respective third-party insurance provider.
          </p>
        </div>

      </div>
    </div>
  );
}
