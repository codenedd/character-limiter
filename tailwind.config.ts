import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#2b292a",
        "text-color": "#f3f1f5",
        "primary-color": "#77757f",
        "secondary-color": "#81848a",
      },
    },
  },
  plugins: [],
};
export default config;
