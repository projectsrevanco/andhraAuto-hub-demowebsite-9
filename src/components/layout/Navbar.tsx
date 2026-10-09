import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CarFront, Menu, X, CalendarCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Vehicles', href: '/vehicles' },
    { name: 'Services', href: '/services' },
    { name: 'Spare Parts', href: '/spare-parts' },
    { name: 'Roadside Assistance', href: '/roadside-assistance' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white border-b border-gray-100 py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-12 md:h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="bg-primary/5 p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                <CarFront className="h-7 w-7 text-accent" strokeWidth={2.5} />
              </div>
              <span className="font-heading font-bold text-xl md:text-2xl text-primary tracking-tight uppercase">
                Andhra<span className="text-accent ml-1">Auto Hub</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center justify-center flex-1 ml-4 xl:ml-8 space-x-1 xl:space-x-2 2xl:space-x-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    isActive 
                      ? 'text-accent bg-accent/5' 
                      : 'text-primary hover:text-accent hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA and Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* CTA Button - Visible on Mobile and Desktop */}
            <Link 
              to="/book-service" 
              className="hidden sm:flex btn-primary text-sm py-2.5 px-5 gap-2"
            >
              <CalendarCheck className="h-4 w-4" />
              <span>Book a Service</span>
            </Link>
            
            {/* Mobile Service CTA Icon (only shown on very small screens) */}
            <Link 
              to="/book-service" 
              className="sm:hidden flex items-center justify-center bg-accent text-white p-2 rounded-md hover:bg-red-700 transition-colors"
              aria-label="Book a Service"
            >
              <CalendarCheck className="h-5 w-5" />
            </Link>

            {/* Mobile menu button */}
            <div className="flex items-center xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary hover:text-accent bg-gray-50 hover:bg-gray-100 p-2 rounded-md focus:outline-none transition-colors"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out absolute w-full bg-white border-b border-gray-100 shadow-lg overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-accent bg-accent/5'
                    : 'text-primary hover:text-accent hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          
          <div className="pt-4 pb-2">
            <Link 
              to="/book-service" 
              className="flex items-center justify-center w-full btn-primary py-3 gap-2"
            >
              <CalendarCheck className="h-5 w-5" />
              Book a Service
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
