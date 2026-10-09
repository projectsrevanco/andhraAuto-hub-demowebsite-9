import { useState, useEffect } from 'react';
import { 
  History, Download, Car, Calendar, CheckCircle2, 
  Settings2, FileText, Wrench, ShieldCheck 
} from 'lucide-react';

const TIMELINE_DATA = [
  {
    id: 3,
    date: 'Jul 15, 2026',
    month: 'Jul 2026',
    serviceType: 'AC Service',
    amount: '₹ 3,500',
    status: 'Completed',
    parts: 'Cabin Air Filter, R134a Refrigerant Gas',
    notes: 'Flushed AC system, replaced cabin filter, refilled refrigerant. Checked compressor health - operating optimally.',
    warranty: '6 Months cooling warranty',
    icon: <Settings2 className="h-5 w-5 text-blue-600" />
  },
  {
    id: 2,
    date: 'Apr 22, 2026',
    month: 'Apr 2026',
    serviceType: 'Brake Inspection',
    amount: '₹ 1,800',
    status: 'Completed',
    parts: 'Front Brake Pads (OEM)',
    notes: 'Inspected front and rear brakes. Replaced front brake pads due to 80% wear. Rear shoes have 40% life remaining.',
    warranty: '10,000 km warranty on parts',
    icon: <ShieldCheck className="h-5 w-5 text-orange-600" />
  },
  {
    id: 1,
    date: 'Jan 10, 2026',
    month: 'Jan 2026',
    serviceType: 'General Service',
    amount: '₹ 4,200',
    status: 'Completed',
    parts: 'Engine Oil (Synthetic), Oil Filter, Air Filter',
    notes: 'Routine 40,000 km service completed. Washed and vacuumed interior. All fluid levels topped up. Battery health at 92%.',
    warranty: 'Standard service warranty',
    icon: <Wrench className="h-5 w-5 text-green-600" />
  }
];

export default function ServiceHistory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-gray-light min-h-screen pb-20">
      
      {/* Header Section */}
      <div className="bg-primary text-white py-12 relative overflow-hidden">
        <div className="container-custom relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3">
              <History className="h-8 w-8 text-accent" />
              Your Vehicle's Complete Service History
            </h1>
            <p className="text-gray-300 text-lg">
              Track maintenance records, parts replaced, and warranty status.
            </p>
          </div>
          
          <button 
            onClick={handleDownload}
            disabled={isDownloading || downloadComplete}
            className={`px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all ${
              downloadComplete 
                ? 'bg-green-600 text-white' 
                : 'bg-white text-primary hover:bg-gray-100'
            }`}
          >
            {isDownloading ? (
              <><div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div> Generating PDF...</>
            ) : downloadComplete ? (
              <><CheckCircle2 className="h-5 w-5" /> Summary Downloaded</>
            ) : (
              <><Download className="h-5 w-5" /> Download Service Summary</>
            )}
          </button>
        </div>
      </div>

      <div className="container-custom pt-8">
        
        {/* Vehicle Dashboard Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
              <Car className="h-8 w-8 text-gray-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Vehicle Details</p>
              <h2 className="text-2xl font-bold text-gray-900">2022 Hyundai Creta</h2>
            </div>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Registration</p>
            <div className="inline-flex px-4 py-2 bg-yellow-400 text-black font-bold rounded shadow-inner tracking-widest text-lg">
              AP XX XX XXXX
            </div>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-gray-200 pl-6 md:pl-10 ml-4 md:ml-6 space-y-12">
            
            {TIMELINE_DATA.map((entry) => (
              <div key={entry.id} className="relative">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[2.1rem] md:-left-[3.1rem] top-1 w-6 h-6 bg-white border-4 border-primary rounded-full shadow"></div>
                
                {/* Month/Year Label */}
                <div className="absolute -left-[8rem] md:-left-[9rem] top-1 w-24 text-right hidden sm:block">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{entry.month}</span>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
                        {entry.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-primary">{entry.serviceType}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" /> {entry.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                        <CheckCircle2 className="h-3.5 w-3.5" /> {entry.status}
                      </span>
                      <span className="text-xl font-bold text-accent">
                        {entry.amount}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase mb-2 flex items-center gap-1.5">
                        <Settings2 className="h-4 w-4" /> Parts Replaced
                      </h4>
                      <p className="text-gray-800 font-medium">{entry.parts}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase mb-2 flex items-center gap-1.5">
                        <ShieldCheck className="h-4 w-4" /> Warranty Status
                      </h4>
                      <p className="text-gray-800 font-medium">{entry.warranty}</p>
                    </div>

                    <div className="md:col-span-2 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                      <h4 className="text-sm font-bold text-blue-800 mb-2 flex items-center gap-1.5">
                        <FileText className="h-4 w-4" /> Technician Notes
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {entry.notes}
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}

            {/* End of timeline indicator */}
            <div className="relative">
              <div className="absolute -left-[1.85rem] md:-left-[2.85rem] top-0 w-4 h-4 bg-gray-200 border-2 border-white rounded-full"></div>
              <p className="text-gray-400 text-sm font-medium italic">End of service records.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
