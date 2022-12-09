/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      },

      colors:{
        'hijau': '#0199A7',
        'putih': '#EDF6F9',
        'hijau-muda': '#DDEFEE',
        'hitam': '#162F3D',
        'abu': '#729EB7',
        'hijaugelap': '#006D77'
      }
    },
    
  },
  plugins: [],
};
