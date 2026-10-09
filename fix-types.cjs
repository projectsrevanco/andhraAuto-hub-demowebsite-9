const fs = require('fs');

const fixFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix handleInputChange type
  content = content.replace(/e: React\.ChangeEvent<HTMLInputElement \| HTMLSelectElement>/g, "e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>");
  content = content.replace(/e: React\.ChangeEvent<HTMLInputElement \| HTMLTextAreaElement \| HTMLSelectElement>/g, "e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>");
  
  // Fix imports
  if (filePath.includes('BookService.tsx') && !content.includes('import FormField')) {
    content = content.replace(/import React, \{ useState, useEffect \} from 'react';/, "import React, { useState, useEffect } from 'react';\nimport FormField from '../components/ui/FormField';");
  }

  // Remove unused imports in BookService
  if (filePath.includes('BookService.tsx')) {
    content = content.replace(/Calendar,\s*Clock,\s*FileText,/, '');
    content = content.replace(/AlertCircle,/, '');
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

fixFile('src/pages/BookService.tsx');
fixFile('src/pages/RoadsideAssistance.tsx');
fixFile('src/pages/Contact.tsx');
fixFile('src/pages/DigitalEstimate.tsx');
