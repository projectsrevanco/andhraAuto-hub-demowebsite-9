const fs = require('fs');

const SERVICES_IMAGES = {
  'General Service': 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Oil Change': 'https://images.unsplash.com/photo-1635315516942-1e967a840e69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Brake Service': 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'AC Service': 'https://images.unsplash.com/photo-1625983794348-18e00fc394d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Battery Service': 'https://images.unsplash.com/photo-1588691884487-7da76ef23a31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Tyre & Wheel Care': 'https://images.unsplash.com/photo-1595166014498-84227928dce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Engine Diagnostics': 'https://images.unsplash.com/photo-1631464350325-0d29790eb7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Body & Paint': 'https://images.unsplash.com/photo-1552844810-0937a505fc94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Electrical Repairs': 'https://images.unsplash.com/photo-1618365287752-9f37c35e9f80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Periodic Maintenance': 'https://images.unsplash.com/photo-1504423851086-1eb8a13a401c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
};

const SPARE_IMAGES = {
  'Engine Parts': 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Brake Parts': 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Battery': 'https://images.unsplash.com/photo-1588691884487-7da76ef23a31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Filters': 'https://images.unsplash.com/photo-1635315516942-1e967a840e69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Suspension': 'https://images.unsplash.com/photo-1590756254033-287af0f88e7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Electrical': 'https://images.unsplash.com/photo-1618365287752-9f37c35e9f80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Tyres': 'https://images.unsplash.com/photo-1595166014498-84227928dce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Exterior Parts': 'https://images.unsplash.com/photo-1552844810-0937a505fc94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
};

// We will just replace the <img> with <ImageWithFallback> in the rendering loops.
function updateFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Add import if not exists
  if (!content.includes('ImageWithFallback')) {
    content = content.replace(/from 'lucide-react';/g, "from 'lucide-react';\nimport ImageWithFallback from '../components/ui/ImageWithFallback';");
    content = content.replace(/from 'react-router-dom';/g, "from 'react-router-dom';\nimport ImageWithFallback from '../components/ui/ImageWithFallback';");
  }

  // Replace <img ... /> with <ImageWithFallback ... />
  // Careful with the exact pattern
  content = content.replace(/<img\s+src=\{([^}]+)\}\s+alt=\{([^}]+)\}\s+className="w-full h-48 object-cover"\s*\/>/g, '<ImageWithFallback src={} alt={} className="w-full h-48 object-cover" />');
  
  // Same for other image shapes if needed, but these are the main cards
  
  fs.writeFileSync(file, content, 'utf8');
}

updateFile('src/pages/Services.tsx');
updateFile('src/pages/SpareParts.tsx');
