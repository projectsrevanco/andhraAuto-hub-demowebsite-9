const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src/pages');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/<label (className="[^"]+")>([^<]+)<\/label>(\s*)<input([^>]*?)name="([^"]+)"/g, '<label htmlFor="" ></label><input id=""=""');
  
  content = content.replace(/<label (className="[^"]+")>([^<]+)<\/label>(\s*)<textarea([^>]*?)name="([^"]+)"/g, '<label htmlFor="" ></label><textarea id=""=""');
  
  content = content.replace(/<label (className="[^"]+")>([^<]+)<\/label>(\s*)<select([^>]*?)name="([^"]+)"/g, '<label htmlFor="" ></label><select id=""=""');

  // Specific fix for DigitalEstimate.tsx which has: <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Make & Model</label>
  // Wait, my regex covers that. But there are also icons in labels: <label ...><Clock/> Preferred Time *</label>
  content = content.replace(/<label (className="[^"]+")>(.*?)<\/label>(\s*)<input([^>]*?)name="([^"]+)"/gs, '<label htmlFor="" ></label><input id=""=""');
  content = content.replace(/<label (className="[^"]+")>(.*?)<\/label>(\s*)<textarea([^>]*?)name="([^"]+)"/gs, '<label htmlFor="" ></label><textarea id=""=""');
  content = content.replace(/<label (className="[^"]+")>(.*?)<\/label>(\s*)<select([^>]*?)name="([^"]+)"/gs, '<label htmlFor="" ></label><select id=""=""');

  fs.writeFileSync(file, content, 'utf8');
});
