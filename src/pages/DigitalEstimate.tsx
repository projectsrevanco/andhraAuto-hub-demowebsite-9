import { useState, useEffect } from 'react';
import { 
  Calculator, FileText, CheckCircle2, Clock, 
  AlertCircle, ShieldCheck, ArrowRight, Settings2, IndianRupee, Wrench
} from 'lucide-react';
import FormField from '../components/ui/FormField';

export default function DigitalEstimate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isGenerating, setIsGenerating] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);

  const [formData, setFormData] = useState({
    vehicle: '',
    registration: '',
    serviceType: 'Brake Service',
    issue: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setShowEstimate(true);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="bg-gray-light min-h-screen pb-20">
      
      {/* Header Section */}
      <div className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-accent rounded-full blur-[100px]"></div>
        </div>
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-lg backdrop-blur-sm mb-6 border border-white/20">
            <Calculator className="h-8 w-8 text-accent" />
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Know the Cost <span className="text-accent">Before</span> We Start
          </h1>
          <p className="text-xl text-gray-300">
            Get a clear estimate for parts, labour and expected repair time before approving the work.
          </p>
        </div>
      </div>

      <div className="container-custom pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Estimate Request Form */}
          <div className={`lg:col-span-5 transition-opacity duration-300 ${showEstimate ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-4">
                Request an Estimate
              </h2>
              
              <form onSubmit={handleGenerate} className="space-y-5">
                <FormField
                  id="vehicle"
                  name="vehicle"
                  label="Vehicle Make & Model"
                  value={formData.vehicle}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Hyundai Creta 2024"
                />
                
                <FormField
                  id="registration"
                  name="registration"
                  label="Registration Number"
                  value={formData.registration}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. AP 16 EA 1234"
                />

                <FormField
                  id="serviceType"
                  name="serviceType"
                  type="select"
                  label="Service / Repair Type"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  options={[
                    { value: "General Service", label: "General Service" },
                    { value: "Brake Service", label: "Brake Service" },
                    { value: "AC Service", label: "AC Service" },
                    { value: "Engine Diagnostics", label: "Engine Diagnostics" },
                    { value: "Body & Paint", label: "Body & Paint" }
                  ]}
                />

                <FormField
                  id="issue"
                  name="issue"
                  type="textarea"
                  label="Issue Description"
                  value={formData.issue}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  placeholder="Briefly describe the symptoms or issues you are experiencing..."
                />

                <button 
                  type="submit" 
                  disabled={isGenerating || showEstimate}
                  className="w-full btn-primary py-3.5 mt-2 flex justify-center items-center gap-2"
                >
                  {isGenerating ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Generating Estimate...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Generate Digital Estimate <ArrowRight className="h-5 w-5" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Generated Estimate View */}
          <div className="lg:col-span-7">
            {showEstimate ? (
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 animate-in fade-in slide-in-from-bottom-8 duration-500">
                
                {/* Estimate Header */}
                <div className="bg-gray-50 border-b border-gray-200 p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                      <FileText className="h-6 w-6 text-accent" />
                      Digital Repair Estimate
                    </h2>
                    <p className="text-sm text-gray-500 font-medium mt-1">
                      Estimate ID: AAH-EST-8842 • Valid for 7 days
                    </p>
                  </div>
                  <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold border border-blue-200">
                    STATUS: PENDING APPROVAL
                  </div>
                </div>

                {/* Estimate Details */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Vehicle</p>
                      <p className="font-semibold text-gray-800">{formData.vehicle || 'Hyundai Creta 2024'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Registration</p>
                      <p className="font-semibold text-gray-800 uppercase">{formData.registration || 'AP 16 EA 1234'}</p>
                    </div>
                  </div>

                  {/* Line Items */}
                  <div className="mb-8">
                    <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                      <Settings2 className="h-5 w-5 text-gray-400" /> Parts
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                        <span className="text-gray-700">OEM Brake Pads (Front & Rear)</span>
                        <span className="font-semibold text-gray-800">₹ 4,500</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                        <span className="text-gray-700">Premium DOT4 Brake Fluid</span>
                        <span className="font-semibold text-gray-800">₹ 800</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-gray-400" /> Labour
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                        <span className="text-gray-700">Brake Service & Bleeding Labour</span>
                        <span className="font-semibold text-gray-800">₹ 1,500</span>
                      </div>
                    </div>
                  </div>

                  {/* Totals & Time */}
                  <div className="bg-primary text-white rounded-lg p-6 mb-8 shadow-md">
                    <div className="flex justify-between items-end mb-4 pb-4 border-b border-white/20">
                      <span className="text-lg font-medium text-gray-300">Estimated Total</span>
                      <span className="text-4xl font-bold text-accent flex items-center">
                        <IndianRupee className="h-7 w-7 mr-1" /> 6,800
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2 text-sm text-gray-300">
                        <Clock className="h-5 w-5" /> Estimated Completion Time
                      </span>
                      <span className="font-bold text-white">3-4 Hours</span>
                    </div>
                  </div>

                  {/* Disclaimers & Trust */}
                  <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg border border-amber-200 text-amber-800 mb-8">
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">
                      Estimate shown is preliminary. Final pricing may vary slightly after physical vehicle inspection. No additional work will be performed without your explicit approval.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-6 rounded-md transition-colors flex items-center justify-center gap-2 shadow-lg">
                      <CheckCircle2 className="h-5 w-5" /> Approve Estimate
                    </button>
                    <button className="flex-1 bg-white border-2 border-primary text-primary hover:bg-gray-50 font-bold py-3.5 px-6 rounded-md transition-colors">
                      Request Changes
                    </button>
                  </div>

                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-200 rounded-lg text-center bg-white/50">
                <ShieldCheck className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-700 mb-2">Transparent Digital Estimates</h3>
                <p className="text-gray-500 max-w-sm mx-auto">
                  Fill out the form to securely generate a detailed digital repair estimate outlining all parts and labour costs.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
