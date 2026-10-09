const fs = require('fs');

function fixHeroHeading(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<h1 className="([^"]*?)"/g, function(match, classes) {
    if (!classes.includes('text-white')) {
      return '<h1 className="text-white ' + classes + '"';
    }
    return match;
  });
  
  fs.writeFileSync(file, content, 'utf8');
}

fixHeroHeading('src/pages/Services.tsx');
fixHeroHeading('src/pages/Contact.tsx');
fixHeroHeading('src/pages/DigitalEstimate.tsx');
fixHeroHeading('src/pages/RoadsideAssistance.tsx');
fixHeroHeading('src/pages/BookService.tsx');
