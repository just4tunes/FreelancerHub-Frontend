export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      borderRadius: {
        lg: '12px',
        md: '10px',
        sm: '8px',
      },
      colors: {
        background: '#ffffff',
        foreground: '#111827',
        card: {
          DEFAULT: '#f3f4f6',
          foreground: '#1f2937',
        },
        popover: {
          DEFAULT: '#f9fafb',
          foreground: '#111827',
        },
        primary: {
          DEFAULT: '#3b82f6',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#e5e7eb',
          foreground: '#374151',
        },
        muted: {
          DEFAULT: '#9ca3af',
          foreground: '#4b5563',
        },
        accent: {
          DEFAULT: '#6366f1',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        border: '#e5e7eb',
        input: '#d1d5db',
        ring: '#3b82f6',
        chart: {
          1: '#ff4500',
          2: '#32cd32',
          3: '#1e90ff',
          4: '#ff69b4',
          5: '#ffcc00',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
