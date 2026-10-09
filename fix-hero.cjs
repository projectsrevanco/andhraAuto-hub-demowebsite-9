const fs = require('fs');
let s = fs.readFileSync('src/pages/SpareParts.tsx', 'utf8');

// replace <img> with ImageWithFallback for hero banner
s = s.replace(/<img\s+src="https:\/\/images\.unsplash\.com\/photo-1590756254033-287af0f88e7a[^"]+"\s+alt="Automotive parts background"\s+className="w-full h-full object-cover object-center"\s+\/>/m, '<ImageWithFallback src="https://images.unsplash.com/photo-1635315516942-1e967a840e69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Automotive parts background" className="w-full h-full object-cover object-center" />');

fs.writeFileSync('src/pages/SpareParts.tsx', s, 'utf8');
