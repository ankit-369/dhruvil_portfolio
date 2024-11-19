/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'custom-52': '53px',
        'custom-30': '30px',
        'custom-32': '32px',
       
      },
      fontSize: {
        'custom-48': '48px',
        'custom-24': '24px',
        'custom-20': '21px',
        'custom-18': '18px',
        'custom-48': '48px',
        'custom-42': '42px',

      },
      screens: {
        'custom-range': { min: '1180px', max: '1470px' }, // Custom range
        'before_1180': { max: '1179px' }, // Custom range
        'before_640':{max:'640px'},
        'after_521':{min:'520px'},
        'after_800' : {min:'800px'},
        'after_450':{min:'440px' , max:'583px'},
        'after_584': { min: '584px',max:'640px' },
        
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],

      },
    },
  },
  plugins: [],
}

