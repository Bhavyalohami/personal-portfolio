/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Archivo Variable', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'JetBrains Mono', 'monospace'],
        'display': ['Archivo Variable', 'Arial Black', 'sans-serif'],
      },
      colors: {
        // Arctic Void Theme
        'background-primary': '#0A0E17',
        'background-secondary': '#141B2B',
        'surface': '#1E2640',
        'border-subtle': '#2A3454',
        'ice-blue': '#7DF9FF',
        'deep-ice': '#3EDCE6',
        'soft-ice': '#B8FFFF',
        'text-primary': '#E6FBFF',
        'text-secondary': '#8B9FC7',
        'text-muted': '#4A5A7A',
        'danger': '#FF6B6B',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.9s cubic-bezier(0.2, 0.9, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.7s cubic-bezier(0.2, 0.9, 0.3, 1) forwards',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'tilt': 'tilt 10s infinite linear',
        'marquee': 'marquee 25s linear infinite',
        'blob': 'blob 7s infinite',
        // React Bits specific animations
        'spin-slow': 'spin 8s linear infinite',
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
            boxShadow: '0 0 20px rgba(125, 249, 255, 0.1), 0 0 40px rgba(62, 220, 230, 0.05)',
            borderColor: '#3EDCE6'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(125, 249, 255, 0.3), 0 0 80px rgba(62, 220, 230, 0.15)',
            borderColor: '#7DF9FF'
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
        'gradient-ice': 'linear-gradient(135deg, #7DF9FF 0%, #3EDCE6 100%)',
        'gradient-void': 'linear-gradient(135deg, #0A0E17 0%, #141B2B 100%)',
        'gradient-glow': 'radial-gradient(circle at 50% 50%, rgba(125, 249, 255, 0.1) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}
