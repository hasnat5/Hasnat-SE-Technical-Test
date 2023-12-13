import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#28a0f6',
        secondary: '#7EC5FB',
        tertiary: '#6EC1E4',
        black1: '#101828',
        black2: '#333',
        black3: '#353D49',
        neutral1: '#7A7A7A',
        neutral2: '#475467',
        neutral3: '#667085',
        neutral4: '#98A2B3'
      }
    },
  },
  plugins: [nextui()],

}
export default config
