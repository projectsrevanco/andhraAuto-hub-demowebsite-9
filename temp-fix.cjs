const fs = require('fs');

let s = fs.readFileSync('src/pages/Services.tsx', 'utf8');
s = s.replace(/import ImageWithFallback from '\.\.\/components\/ui\/ImageWithFallback';\nimport \{ Link \} from 'react-router-dom';\nimport ImageWithFallback from '\.\.\/components\/ui\/ImageWithFallback';/g, "import { Link } from 'react-router-dom';\nimport ImageWithFallback from '../components/ui/ImageWithFallback';");
s = s.replace(/<ImageWithFallback src=\{\} alt=\{\} className="" \/>/g, '<ImageWithFallback src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />');
fs.writeFileSync('src/pages/Services.tsx', s, 'utf8');

let sp = fs.readFileSync('src/pages/SpareParts.tsx', 'utf8');
sp = sp.replace(/import ImageWithFallback from '\.\.\/components\/ui\/ImageWithFallback';\nimport \{ Link \} from 'react-router-dom';\nimport ImageWithFallback from '\.\.\/components\/ui\/ImageWithFallback';/g, "import { Link } from 'react-router-dom';\nimport ImageWithFallback from '../components/ui/ImageWithFallback';");
sp = sp.replace(/<ImageWithFallback src=\{\} alt=\{\} className="" \/>/g, '<ImageWithFallback src={part.image} alt={part.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />');
fs.writeFileSync('src/pages/SpareParts.tsx', sp, 'utf8');
