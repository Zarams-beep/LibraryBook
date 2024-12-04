import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        base: "320px",
        "1sm": "370px",
        sm2:'430px',
        sm: "500px",
        smm: "550px",
        md: "630px",
        md2: "690px",
        md3: "700px",
        mdd: "930px",
        lg: "1024px",
        lgg: "1130px",
        lggg: "1200px",
        xl: "1382px",
        "2xl": "1560px",
        "3xl": "3560px",
      },
    }
  },
  plugins: [],
};
export default config;
