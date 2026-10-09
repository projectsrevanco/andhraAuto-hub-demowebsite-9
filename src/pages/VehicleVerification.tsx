import { 
  ShieldCheck, CheckCircle2, History, Car, FileText, 
  Wrench, Activity, BadgeCheck, ShieldAlert, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function VehicleVerification() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const verificationPoints = [
    {
      title: 'Vehicle History',
      description: 'Comprehensive check against major accident records, flood damage, and major repairs.',
      icon: <History className="h-6 w-6 text-accent" />,
      status: 'Verified'
    },
    {
      title: 'Ownership History',
      description: 'Clear documentation of previous owners to ensure no financing discrepancies.',
      icon: <Car className="h-6 w-6 text-accent" />,
      status: 'Verified'
    },
    {
      title: 'RC Verification',
      description: 'Registration Certificate details authenticated against official state records.',
      icon: <FileText className="h-6 w-6 text-accent" />,
      status: 'Verified'
    },
    {
      title: 'Service Records',
      description: 'Access to detailed maintenance logs from authorized service centers.',
      icon: <Wrench className="h-6 w-6 text-accent" />,
      status: 'Available'
    },
    {
      title: 'Accident Check',
      description: 'Visual and structural checks to ensure the frame and chassis are intact.',
      icon: <ShieldAlert className="h-6 w-6 text-accent" />,
      status: 'Passed'
    },
    {
      title: 'Inspection Report',
      description: 'A detailed 150-point technical evaluation covering engine, electricals, and exterior.',
      icon: <Activity className="h-6 w-6 text-accent" />,
      status: 'Completed'
    }
  ];

  return (
    <div className="bg-gray-light min-h-screen pb-20">
      
      {/* Header Section */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-accent/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm mb-6">
            <ShieldCheck className="h-8 w-8 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Know the Vehicle <span className="text-accent">Before</span> You Buy
          </h1>
          <p className="text-xl text-gray-300">
            Every verified vehicle should come with information you can trust.
          </p>
        </div>
      </div>

      <div className="container-custom pt-16">
        
        {/* Verification Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Verification Standards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We perform extensive background and physical checks on all pre-owned inventory. 
              Here is what we examine before a vehicle earns the Andhra Auto Hub Verified badge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verificationPoints.map((point, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {point.status}
                  </span>
                </div>
                <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Report Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 relative">
            {/* Header of the report */}
            <div className="bg-gray-50 border-b border-gray-100 p-8 md:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">Vehicle Verification Report</h2>
                <p className="text-sm text-gray-500 font-medium">Report ID: AAH-VER-9824 • Date: Oct 2026</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-bold shadow-md">
                  <BadgeCheck className="h-5 w-5" />
                  STATUS: VERIFIED
                </div>
              </div>
            </div>

            {/* Body of the report */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                
                {/* Timeline / Checks */}
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[1.125rem] before:h-full before:w-0.5 before:bg-gray-200">
                  <div className="relative flex items-center gap-6">
                    <div className="h-10 w-10 rounded-full bg-green-100 border-4 border-white flex items-center justify-center z-10 shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Registration Verified</h4>
                      <p className="text-sm text-gray-500">Matched with regional transport authorities.</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center gap-6">
                    <div className="h-10 w-10 rounded-full bg-green-100 border-4 border-white flex items-center justify-center z-10 shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Ownership Records Checked</h4>
                      <p className="text-sm text-gray-500">No active loans or hypothecation pending.</p>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-6">
                    <div className="h-10 w-10 rounded-full bg-green-100 border-4 border-white flex items-center justify-center z-10 shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Service History Available</h4>
                      <p className="text-sm text-gray-500">Consistent maintenance track record verified.</p>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-6">
                    <div className="h-10 w-10 rounded-full bg-green-100 border-4 border-white flex items-center justify-center z-10 shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Inspection Completed</h4>
                      <p className="text-sm text-gray-500">Passed 150-point technical evaluation.</p>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-6">
                    <div className="h-10 w-10 rounded-full bg-green-100 border-4 border-white flex items-center justify-center z-10 shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Insurance Information</h4>
                      <p className="text-sm text-gray-500">Valid comprehensive insurance coverage found.</p>
                    </div>
                  </div>
                </div>

                {/* Right side CTA & Disclaimer */}
                <div className="flex flex-col justify-center items-start bg-gray-50 p-8 rounded-lg border border-gray-100">
                  <ShieldCheck className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Ready to find your match?</h3>
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                    Every pre-owned vehicle in our inventory goes through this exact process. Browse our vehicles to view their individual verification reports.
                  </p>
                  <Link to="/vehicles" className="btn-primary w-full py-3.5 text-center flex justify-center items-center gap-2">
                    Check Vehicle Details <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

              </div>
            </div>

            {/* Disclaimer Footer */}
            <div className="bg-amber-50 border-t border-amber-100 p-4 text-center">
              <p className="text-amber-800 text-xs font-medium uppercase tracking-wider">
                
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
