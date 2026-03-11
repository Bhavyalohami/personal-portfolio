// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaTerminal } from 'react-icons/fa';

// const Footer = () => {
//   const year = new Date().getFullYear();

//   const sections = [
//     {
//       title: 'EXPLORE',
//       links: ['Home', 'About', 'Projects', 'Contact'],
//     },
//     {
//       title: 'RESOURCES',
//       links: ['Skills', 'Experience', 'Education', 'Resume'],
//     },
//     {
//       title: 'LEGAL',
//       links: ['Privacy', 'Terms', 'Cookies'],
//     },
//   ];

//   const socials = [
//     { icon: <FaGithub />, url: '#', label: 'GitHub' },
//     { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
//     { icon: <FaTwitter />, url: '#', label: 'Twitter' },
//     { icon: <FaEnvelope />, url: '#', label: 'Email' },
//   ];

//   return (
//     <footer className="relative border-t border-steel/50 bg-graphite/90 backdrop-blur-sm">
//       <div className="container mx-auto px-4 md:px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           {/* Brand */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 rounded-lg bg-gradient-ice flex items-center justify-center text-graphite">
//                 <FaTerminal />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-ice bg-clip-text text-transparent">BHAVYA</span>
//             </div>
//             <p className="text-text-light/50 text-sm leading-relaxed">
//               Building the future with code. Full-stack developer passionate about creating exceptional digital experiences.
//             </p>
//             <div className="flex space-x-4 pt-4">
//               {socials.map((social, i) => (
//                 <a
//                   key={i}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 rounded-full border border-steel flex items-center justify-center text-soft-ice hover:text-ice-blue hover:border-ice-blue transition-all duration-300"
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Links */}
//           {sections.map((section) => (
//             <div key={section.title}>
//               <h4 className="text-sm font-mono text-ice-blue mb-4 tracking-wider">{section.title}</h4>
//               <ul className="space-y-3">
//                 {section.links.map((link) => (
//                   <li key={link}>
//                     <Link
//                       to={`/${link.toLowerCase()}`}
//                       className="text-text-light/60 hover:text-ice-blue transition-colors text-sm"
//                     >
//                       {link}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-16 pt-8 border-t border-steel/50 flex flex-col md:flex-row justify-between items-center text-xs text-text-light/40">
//           <p>© {year} BHAVYA LOHAMI. All rights reserved.</p>
//           <p className="flex items-center mt-2 md:mt-0">
//             Built with <FaHeart className="mx-1 text-deep-ice animate-pulse" /> and cold coffee
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaTerminal } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  const sections = [
    {
      title: 'EXPLORE',
      links: ['Home', 'About', 'Projects', 'Contact'],
    },
    {
      title: 'RESOURCES',
      links: ['Skills', 'Experience', 'Education', 'Resume'],
    },
    {
      title: 'LEGAL',
      links: ['Privacy', 'Terms', 'Cookies'],
    },
  ];

  const socials = [
    { icon: <FaGithub />, url: '#', label: 'GitHub' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaEnvelope />, url: '#', label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-graphite/40 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-ice flex items-center justify-center text-graphite shadow-lg">
                <FaTerminal />
              </div>
              <span className="text-2xl font-bold bg-gradient-ice bg-clip-text text-transparent">BHAVYA</span>
            </div>
            <p className="text-text-light/50 text-sm leading-relaxed">
              Building the future with code. Full‑stack developer passionate about creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4 pt-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-soft-ice hover:text-ice-blue hover:border-ice-blue hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-mono text-ice-blue mb-4 tracking-wider">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase()}`}
                      className="text-text-light/60 hover:text-ice-blue transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-text-light/40">
          <p>© {year} BHAVYA LOHAMI. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Built with <FaHeart className="mx-1 text-deep-ice animate-pulse" /> and cold coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;