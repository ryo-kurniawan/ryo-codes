/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rPrimary: '#804205', // Ganti kode warna dengan kode warna yang diinginkan
        rSecondary: '#FFE5C8', // Ganti kode warna dengan kode warna yang diinginkan
      },
    },
  },
  plugins: [],
}

