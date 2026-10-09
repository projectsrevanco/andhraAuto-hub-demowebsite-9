const fs = require('fs');

function cleanFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/import ImageWithFallback from '\.\.\/components\/ui\/ImageWithFallback';\nimport ImageWithFallback from '\.\.\/components\/ui\/ImageWithFallback';/g, "import ImageWithFallback from '../components/ui/ImageWithFallback';");
  
  // Also check if <ImageWithFallback is actually there, if not maybe my regex failed
  if (!content.includes('<ImageWithFallback src=')) {
    content = content.replace(/<img\s+src=\{([^}]+)\}\s+alt=\{([^}]+)\}\s+className="([^"]+)"\s*\/>/g, '<ImageWithFallback src={} alt={} className="" />');
  }

  fs.writeFileSync(file, content, 'utf8');
}

cleanFile('src/pages/Services.tsx');
cleanFile('src/pages/SpareParts.tsx');
