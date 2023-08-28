/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b290eXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

