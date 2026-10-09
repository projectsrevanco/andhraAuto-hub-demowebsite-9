const fs = require('fs');
let s = fs.readFileSync('src/pages/Services.tsx', 'utf8');
s = s.replace(/import ImageWithFallback from '\.\.\/components\/ui\/ImageWithFallback';\nimport \{ Link \} from 'react-router-dom';\nimport ImageWithFallback from '\.\.\/components\/ui\/ImageWithFallback';/g, "import { Link } from 'react-router-dom';\nimport ImageWithFallback from '../components/ui/ImageWithFallback';");
fs.writeFileSync('src/pages/Services.tsx', s, 'utf8');
