
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FiMenu, FiX } from 'react-icons/fi';
// import { FaTerminal } from 'react-icons/fa';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Skills', path: '/skills' },
//     { name: 'Projects', path: '/projects' },
//     { name: 'Experience', path: '/experience' },
//     { name: 'Education', path: '/education' },
//     { name: 'Resume', path: '/resume' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'py-3 bg-graphite/90 backdrop-blur-xl border-b border-steel/50' : 'py-5 bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3 group">
//             {/* <div className="w-10 h-10 rounded-lg bg-gradient-ice flex items-center justify-center text-graphite group-hover:scale-110 transition-transform">
//               <FaTerminal className="text-xl" />
//             </div>
//             <div>
//               <span className="text-xl font-bold bg-gradient-ice bg-clip-text text-transparent">BHAVYA</span>
//               <span className="text-xs text-soft-ice/70 font-mono block">DEVELOPER</span>
//             </div> */}
//             <img src="/logo.png" className='h-16 w-36' alt="" />
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center space-x-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
//                   location.pathname === link.path
//                     ? 'text-ice-blue bg-steel/50'
//                     : 'text-text-light/70 hover:text-ice-blue hover:bg-steel/30'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Availability Badge */}
//           <div className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full bg-ice-blue/10 border border-ice-blue/30 text-ice-blue text-sm font-mono">
//             <span className="w-2 h-2 bg-deep-ice rounded-full animate-pulse"></span>
//             <span>Available</span>
//           </div>

//           {/* Mobile Menu Button */}
//           <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-ice-blue p-2">
//             {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenu && (
//           <div className="md:hidden mt-4 pb-4 border-t border-steel/50 pt-4">
//             <div className="flex flex-col space-y-2">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   onClick={() => setMobileMenu(false)}
//                   className={`px-4 py-3 rounded-lg text-sm font-medium ${
//                     location.pathname === link.path
//                       ? 'text-ice-blue bg-steel border-l-4 border-ice-blue'
//                       : 'text-text-light/70 hover:text-ice-blue hover:bg-steel/30'
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <div className="flex items-center space-x-2 px-4 py-3 mt-2 rounded-lg bg-ice-blue/10 border border-ice-blue/30 text-ice-blue text-sm font-mono">
//                 <span className="w-2 h-2 bg-deep-ice rounded-full animate-pulse"></span>
//                 <span>Available for work</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-graphite/60 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Use your logo image – adjust path as needed */}
            <img src="/logo.png" className="h-12 md:h-16 w-auto transition-transform group-hover:scale-105" alt="Bhavya Lohami" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  location.pathname === link.path
                    ? 'text-ice-blue bg-white/10 backdrop-blur-sm border border-white/10'
                    : 'text-text-light/70 hover:text-ice-blue hover:bg-white/5 backdrop-blur-sm'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Availability Badge */}
          <div className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-ice-blue text-sm font-mono">
            <span className="w-2 h-2 bg-deep-ice rounded-full animate-pulse"></span>
            <span>Available</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-ice-blue p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
          >
            {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 backdrop-blur-xl bg-graphite/70 rounded-2xl p-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenu(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-ice-blue bg-white/10 border-l-4 border-ice-blue'
                      : 'text-text-light/70 hover:text-ice-blue hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-2 px-4 py-3 mt-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-ice-blue text-sm font-mono">
                <span className="w-2 h-2 bg-deep-ice rounded-full animate-pulse"></span>
                <span>Available for work</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;