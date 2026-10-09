const fs = require('fs');
let content = fs.readFileSync('src/pages/BookService.tsx', 'utf8');
content = content.replace(/,\s*AlertCircle/, '');
content = content.replace(/AlertCircle,\s*/, '');
fs.writeFileSync('src/pages/BookService.tsx', content, 'utf8');
