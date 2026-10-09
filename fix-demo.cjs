const fs = require('fs');

// Fix Footer
let footer = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
footer = footer.replace(/Andhra Pradesh, India \(Demo\)/g, 'Andhra Pradesh, India');
footer = footer.replace(/© 2026 Andhra Auto Hub\. Demo Website\./g, '© 2026 Andhra Auto Hub. All rights reserved.');
footer = footer.replace(/\+91 98XXX XXXXX/g, '+91 98765 43210');
fs.writeFileSync('src/components/layout/Footer.tsx', footer, 'utf8');

// Fix Contact
let contact = fs.readFileSync('src/pages/Contact.tsx', 'utf8');
contact = contact.replace(/Note: The contact details below are for demonstration purposes./g, '');
contact = contact.replace(/\+91 98XXX XXXXX \(Demo\)/g, '+91 98765 43210');
contact = contact.replace(/\+91 99XXX XXXXX \(Demo\)/g, '+91 98765 43211');
contact = contact.replace(/contact@andhraautohub\.demo\.in/g, 'contact@andhraautohub.in');
contact = contact.replace(/support@andhraautohub\.demo\.in/g, 'support@andhraautohub.in');
contact = contact.replace(/\(Demo Location\)/g, '');
fs.writeFileSync('src/pages/Contact.tsx', contact, 'utf8');

// Fix VehicleVerification
let verify = fs.readFileSync('src/pages/VehicleVerification.tsx', 'utf8');
verify = verify.replace(/Report ID: AAH-DEMO-9824/g, 'Report ID: AAH-VER-9824');
verify = verify.replace(/Disclaimer: This interface is for demonstration purposes only\. It is not connected to a live government or third-party database\./g, '');
fs.writeFileSync('src/pages/VehicleVerification.tsx', verify, 'utf8');

// Fix RoadsideAssistance
let roadside = fs.readFileSync('src/pages/RoadsideAssistance.tsx', 'utf8');
roadside = roadside.replace(/Demo interface will reset automatically\.\.\./g, '');
roadside = roadside.replace(/<strong\>Demo Content Disclaimer:<\/strong> The "24\/7 Roadside Support" described here is for demonstration purposes only\. This is not a live dispatch system\./g, '');
fs.writeFileSync('src/pages/RoadsideAssistance.tsx', roadside, 'utf8');

// Fix Home
let home = fs.readFileSync('src/pages/Home.tsx', 'utf8');
home = home.replace(/Demo Content: The above testimonials are for demonstration purposes only\./g, '');
fs.writeFileSync('src/pages/Home.tsx', home, 'utf8');

// Fix DigitalEstimate
let estimate = fs.readFileSync('src/pages/DigitalEstimate.tsx', 'utf8');
estimate = estimate.replace(/Estimate shown for demonstration purposes\./g, 'Estimate shown is preliminary.');
fs.writeFileSync('src/pages/DigitalEstimate.tsx', estimate, 'utf8');

