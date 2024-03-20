/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "moderate-blue": "rgb(77,91,158)",
        "soft-red": "hsl(358, 79%, 66%)",
        "light-grayish-blue": "hsl(239, 57%, 85%)",
        "pale-red": "hsl(357, 100%, 86%)",
        "dark-blue": "rgb(41,50,100)",
        "grayish-blue": "hsl(211, 10%, 45%)",
        "light-gray": "hsl(223, 19%, 93%)",
        "very-light-gray": "hsl(228, 33%, 97%)",
        "light-blue": "#9696bf"
      }
    },
  },
  plugins: [],
}

