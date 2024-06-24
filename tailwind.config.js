/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      "spacing-bg": "#1F1F1F",
      "default-bg": "#1A1A1A",
      "default-color": "rgba(255, 255, 255, 50%)",
      "default-hover-color": "rgba(255, 255, 255, 100%)",
      "accent": "hsl(118, 39%, 20%)"
    },
    extend: {},
  },
  plugins: [],
}

