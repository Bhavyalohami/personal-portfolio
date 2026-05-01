// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         'inter': ['Inter', 'system-ui', 'sans-serif'],
//         'mono': ['JetBrains Mono', 'monospace'],
//       },
//       colors: {
//         // Main theme colors
//         'graphite': '#0E1116',
//         'steel': '#1A1F29',
//         'card': '#242B38',
//         'ice-blue': '#7DF9FF',
//         'soft-ice': '#B8FFFF',
//         'deep-ice': '#3EDCE6',
//         'text-light': '#E6FBFF',
//       },
//       animation: {
//         'fade-in-up': 'fadeInUp 0.8s ease-out',
//         'float': 'float 3s ease-in-out infinite',
//         'pulse-dot': 'pulse 2s infinite',
//         'typing': 'typing 3.5s steps(40, end) infinite',
//         'blink-caret': 'blinkCaret 0.75s step-end infinite',
//         'slide-in-left': 'slideInLeft 0.5s ease-out',
//         'slide-in-right': 'slideInRight 0.5s ease-out',
//         'bounce-slow': 'bounce 2s infinite',
//         'shimmer': 'shimmer 2s infinite',
//         'glow': 'glow 2s ease-in-out infinite',
//         'scan-line': 'scanLine 8s linear infinite',
//         'neon-pulse': 'neonPulse 1.5s ease-in-out infinite',
//       },
//       keyframes: {
//         fadeInUp: {
//           '0%': { opacity: '0', transform: 'translateY(20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-10px)' },
//         },
//         typing: {
//           '0%': { width: '0' },
//           '50%': { width: '100%' },
//           '80%': { width: '100%' },
//           '100%': { width: '0' },
//         },
//         blinkCaret: {
//           'from, to': { 'border-color': 'transparent' },
//           '50%': { 'border-color': '#7DF9FF' },
//         },
//         slideInLeft: {
//           '0%': { transform: 'translateX(-100%)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         slideInRight: {
//           '0%': { transform: 'translateX(100%)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         shimmer: {
//           '0%': { backgroundPosition: '-200px 0' },
//           '100%': { backgroundPosition: '200px 0' },
//         },
//         glow: {
//           '0%, 100%': { 
//             textShadow: '0 0 5px #7DF9FF, 0 0 10px #7DF9FF, 0 0 15px #7DF9FF' 
//           },
//           '50%': { 
//             textShadow: '0 0 10px #B8FFFF, 0 0 20px #B8FFFF, 0 0 30px #B8FFFF' 
//           },
//         },
//         scanLine: {
//           '0%': { transform: 'translateY(-100%)' },
//           '100%': { transform: 'translateY(400%)' },
//         },
//         neonPulse: {
//           '0%, 100%': { 
//             boxShadow: '0 0 5px #7DF9FF, 0 0 10px #7DF9FF, inset 0 0 5px #7DF9FF' 
//           },
//           '50%': { 
//             boxShadow: '0 0 20px #7DF9FF, 0 0 40px #7DF9FF, inset 0 0 20px #7DF9FF' 
//           },
//         },
//       },
//       backgroundImage: {
//         'gradient-ice': 'linear-gradient(135deg, #7DF9FF 0%, #3EDCE6 100%)',
//         'gradient-dark': 'linear-gradient(135deg, #0E1116 0%, #1A1F29 100%)',
//         'gradient-card': 'linear-gradient(135deg, #242B38 0%, #1A1F29 100%)',
//         'gradient-steel': 'linear-gradient(135deg, #1A1F29 0%, #242B38 100%)',
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'display': ['Georgia', 'Charter', 'Times New Roman', 'serif'],
      },
      colors: {
        'graphite': '#EEF5FF',
        'steel': '#D7E4F5',
        'card': '#FBFDFF',
        'ice-blue': '#1F6FEB',
        'soft-ice': '#D9E9FF',
        'deep-ice': '#0B4DB3',
        'text-light': '#142033',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.9s cubic-bezier(0.2, 0.9, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.7s cubic-bezier(0.2, 0.9, 0.3, 1) forwards',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'tilt': 'tilt 10s infinite linear',
        'marquee': 'marquee 25s linear infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(106, 226, 255, 0.2), 0 0 40px rgba(0, 184, 217, 0.1)',
            borderColor: '#6AE2FF'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(106, 226, 255, 0.5), 0 0 80px rgba(0, 184, 217, 0.3)',
            borderColor: '#A3F0FF'
          },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-ice': 'linear-gradient(135deg, #1F6FEB 0%, #0B4DB3 100%)',
        'gradient-glow': 'radial-gradient(circle at 50% 50%, rgba(31, 111, 235, 0.14) 0%, transparent 50%)',
        'gradient-mesh': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0v60M0 30h60\' stroke=\'%231F6FEB\' stroke-width=\'0.5\' stroke-opacity=\'0.12\' fill=\'none\'/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
}
