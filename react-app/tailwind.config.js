/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 강남구 (토스 스타일)
        gangnam: {
          primary: '#0064FF',
          secondary: '#0052CC',
        },
        // 업사이클센터
        upcycle: {
          primary: '#0066cc',
          secondary: '#2c5aa0',
        }
      },
      maxWidth: {
        'container': '1200px',
      }
    },
  },
  plugins: [],
}
