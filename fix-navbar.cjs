const fs = require('fs');

let navbar = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf8');

// Change lg to xl for menu
navbar = navbar.replace(/hidden lg:flex items-center justify-center flex-1 ml-8 space-x-1 xl:space-x-4/, 'hidden xl:flex items-center justify-center flex-1 ml-4 xl:ml-8 space-x-1 xl:space-x-2 2xl:space-x-4');
navbar = navbar.replace(/flex items-center lg:hidden/, 'flex items-center xl:hidden');

// Add whitespace-nowrap to links
navbar = navbar.replace(/className={\px-3 py-2 text-sm font-medium rounded-md transition-all duration-200/g, 'className={whitespace-nowrap px-2 xl:px-3 py-2 text-sm font-medium rounded-md transition-all duration-200');

// Fix mobile dropdown logic lg:hidden -> xl:hidden
navbar = navbar.replace(/<div className="xl:hidden border-t border-gray-100 bg-white">/, '<div className="xl:hidden border-t border-gray-100 bg-white">');
navbar = navbar.replace(/<div className="lg:hidden border-t border-gray-100 bg-white">/, '<div className="xl:hidden border-t border-gray-100 bg-white">');

fs.writeFileSync('src/components/layout/Navbar.tsx', navbar, 'utf8');
