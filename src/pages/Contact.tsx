import { useState, useEffect } from 'react';
import { 
  Phone, Mail, Clock, MapPin, Send, MessageSquare, 
  Car, Wrench, Package, ShieldCheck, PhoneCall
} from 'lucide-react';
import FormField from '../components/ui/FormField';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <div className="bg-gray-light min-h-screen pb-20">
      
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Customer service representative" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6 border border-accent/50">
            <MessageSquare className="h-8 w-8 text-accent" />
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Get You <span className="text-accent">Back on the Road</span>
          </h1>
          <p className="text-xl text-gray-300">
            Have a question? We are here to help with everything from servicing to new vehicle inquiries.
          </p>
        </div>
      </div>

      <div className="container-custom pt-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Information & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              
              <div className="bg-blue-50 border border-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium mb-8">
                
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0 border border-gray-200">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Phone Number</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0 border border-gray-200">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email Address</h3>
                    <p className="text-gray-600">contact@andhraautohub.in</p>
                    <p className="text-gray-600">support@andhraautohub.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0 border border-gray-200">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" /> Location Map
              </h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative flex items-center justify-center">
                {/* Generic Map Placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Map placeholder" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-[2px]">
                  <MapPin className="h-10 w-10 text-primary mb-2" />
                  <span className="font-bold text-primary">Andhra Pradesh, India</span>
                  <span className="text-sm text-gray-600"></span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50" aria-live="polite">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for reaching out. A representative will contact you shortly.</p>
                  <p className="text-xs text-green-600 mt-4">(Form will reset automatically)</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      id="name"
                      name="name"
                      label="Full Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                    />
                    <FormField
                      id="phone"
                      name="phone"
                      type="tel"
                      label="Phone Number *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Your phone number"
                    />
                  </div>

                  <FormField
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Your email address"
                  />

                  <FormField
                    id="subject"
                    name="subject"
                    type="select"
                    label="Subject / Enquiry Type *"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    options={[
                      { value: "Vehicle Enquiries", label: "Vehicle Enquiries (New/Used)" },
                      { value: "Service Enquiries", label: "Service Enquiries" },
                      { value: "Spare Parts Enquiries", label: "Spare Parts Enquiries" },
                      { value: "Insurance Assistance", label: "Insurance Assistance" },
                      { value: "Roadside Assistance", label: "Roadside Assistance" },
                      { value: "Other", label: "Other General Inquiry" }
                    ]}
                  />

                  <FormField
                    id="message"
                    name="message"
                    type="textarea"
                    label="Message *"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="How can we help you today?"
                  />

                  <button type="submit" className="w-full btn-primary py-4 text-lg flex justify-center items-center gap-2 hover:shadow-lg">
                    Send Message <Send className="h-5 w-5" />
                  </button>
                </form>
              )}
              
              {/* Quick Contact Badges */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">We can help you with</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700"><Wrench className="h-4 w-4 text-primary" /> Service</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700"><Car className="h-4 w-4 text-primary" /> Vehicles</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700"><Package className="h-4 w-4 text-primary" /> Parts</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700"><ShieldCheck className="h-4 w-4 text-primary" /> Insurance</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700"><PhoneCall className="h-4 w-4 text-primary" /> Roadside</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
