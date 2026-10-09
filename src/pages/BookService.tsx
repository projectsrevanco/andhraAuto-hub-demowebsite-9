import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Car, Wrench,  
  CheckCircle, ArrowRight
} from 'lucide-react';
import FormField from '../components/ui/FormField';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  brand: string;
  model: string;
  registration: string;
  serviceCategory: string;
  serviceType: string;
  date: string;
  time: string;
  issue: string;
}

export default function BookService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    brand: '',
    model: '',
    registration: '',
    serviceCategory: '',
    serviceType: '',
    date: '',
    time: '',
    issue: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) newErrors.phone = 'Enter a valid 10-digit phone number';
    
    if (!formData.brand.trim()) newErrors.brand = 'Vehicle brand is required';
    if (!formData.model.trim()) newErrors.model = 'Vehicle model is required';
    if (!formData.registration.trim()) newErrors.registration = 'Registration number is required';
    
    if (!formData.serviceCategory) newErrors.serviceCategory = 'Please select a service';
    if (!formData.date) newErrors.date = 'Preferred date is required';
    if (!formData.time) newErrors.time = 'Preferred time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API call and generate ref number
      const randomRef = 'AAH-' + Math.floor(100000 + Math.random() * 900000);
      setRefNumber(randomRef);
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    } else {
      // Scroll to first error roughly
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-light min-h-screen py-20 flex items-center justify-center">
        <div className="container-custom max-w-2xl">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 text-center">
            
            <div className="bg-green-50" aria-live="polite">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-white text-3xl md:text-4xl font-bold text-gray-900 mb-2">Service Request Received</h1>
              <p className="text-green-800 font-medium">Your appointment request has been successfully placed.</p>
            </div>

            <div className="p-8 md:p-10 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider block mb-1">Reference Number</span>
                  <span className="font-bold text-primary text-xl">{refNumber}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider block mb-1">Selected Service</span>
                  <span className="font-bold text-gray-800">{formData.serviceCategory}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider block mb-1">Date & Time</span>
                  <span className="font-bold text-gray-800">{formData.date} at {formData.time}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider block mb-1">Contact</span>
                  <span className="font-bold text-gray-800">{formData.phone}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-center mb-8">
                Our service advisor will review your request and call you shortly at <span className="font-semibold text-gray-800">{formData.phone}</span> to confirm your appointment slot and provide an initial estimate.
              </p>

              <div className="flex justify-center">
                <Link to="/" className="btn-primary px-8 py-3.5">
                  Back to Home <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-light min-h-screen pb-20">
      
      {/* Header Section */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Book a Service Appointment</h1>
          <p className="text-xl text-gray-300">
            Choose your vehicle, service and preferred appointment time.
          </p>
        </div>
      </div>

      <div className="container-custom pt-10">
        <div className="max-w-4xl mx-auto">
          
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* 1. Customer Details */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <User className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-primary">1. Customer Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  id="fullName"
                  name="fullName"
                  label="Full Name *"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  error={errors.fullName}
                />
                <FormField
                  id="phone"
                  name="phone"
                  type="tel"
                  label="Phone Number *"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit mobile number"
                  error={errors.phone}
                />
                <div className="md:col-span-2">
                  <FormField
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address (Optional)"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="For digital estimates and invoices"
                  />
                </div>
              </div>
            </div>

            {/* 2. Vehicle Information */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <Car className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-primary">2. Vehicle Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FormField
                  id="brand"
                  name="brand"
                  label="Vehicle Brand *"
                  value={formData.brand}
                  onChange={handleInputChange}
                  placeholder="e.g. Hyundai"
                  error={errors.brand}
                />
                <FormField
                  id="model"
                  name="model"
                  label="Model *"
                  value={formData.model}
                  onChange={handleInputChange}
                  placeholder="e.g. Creta"
                  error={errors.model}
                />
                <div className="md:col-span-2 lg:col-span-1">
                  <FormField
                    id="registration"
                    name="registration"
                    label="Registration No. *"
                    value={formData.registration}
                    onChange={handleInputChange}
                    placeholder="e.g. AP 16 EA 1234"
                    error={errors.registration}
                  />
                </div>
              </div>
            </div>

            {/* 3. Service Details */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gray-400"></div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <Wrench className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-primary">3. Service Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <FormField
                  id="serviceCategory"
                  name="serviceCategory"
                  type="select"
                  label="Select Service *"
                  value={formData.serviceCategory}
                  onChange={handleInputChange}
                  error={errors.serviceCategory}
                  options={[
                    { value: "General Service", label: "General Service" },
                    { value: "Oil Change", label: "Oil Change" },
                    { value: "Brake Service", label: "Brake Service" },
                    { value: "AC Service", label: "AC Service" },
                    { value: "Battery Service", label: "Battery Service" },
                    { value: "Tyre & Wheel Care", label: "Tyre & Wheel Care" },
                    { value: "Engine Diagnostics", label: "Engine Diagnostics" },
                    { value: "Body & Paint", label: "Body & Paint" },
                    { value: "Electrical Repairs", label: "Electrical Repairs" },
                    { value: "Other", label: "Other (Specify below)" }
                  ]}
                />
                <FormField
                  id="serviceType"
                  name="serviceType"
                  type="select"
                  label="Service Type"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  options={[
                    { value: "Drop-off", label: "I will drop off the vehicle" },
                    { value: "Pick-up", label: "Request Vehicle Pick-up (Extra charges may apply)" }
                  ]}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <FormField
                  id="date"
                  name="date"
                  type="date"
                  label="Preferred Date *"
                  value={formData.date}
                  onChange={handleInputChange}
                  error={errors.date}
                />
                <FormField
                  id="issue"
                  name="issue"
                  type="textarea"
                  label="Describe the Issue (Optional)"
                  value={formData.issue}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Please provide any specific details about the problems you are facing or specific requests."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button type="submit" className="btn-primary w-full md:w-auto px-12 py-4 text-lg shadow-md hover:shadow-lg">
                Confirm Service Request
              </button>
            </div>
            
          </form>

        </div>
      </div>
    </div>
  );
}
