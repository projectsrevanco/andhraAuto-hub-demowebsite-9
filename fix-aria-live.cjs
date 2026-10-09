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
  
  // Add aria-live="polite" to success states
  // We can look for <div className="bg-green-50 ...">
  content = content.replace(/<div className="bg-green-50([^"]*)">/g, '<div className="bg-green-50" aria-live="polite">');

  fs.writeFileSync(file, content, 'utf8');
});
