/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral1': '#FAFAFA',
        'neutral2': '#F6F7F7',
        'neutral3': '#EEEEEE',
        'neutral4': '#DFE1E6',
        'neutral7': '#6F737A',
        'neutral8': '#3F4145',
        'neutral9': '#1C1E24',
        'primary5': '#4B286D',
        'secondary2': '#EFF1FE',
        'secondary5': '#6277F0',
      },
      boxShadow: {
        'header': '0px 2px 0px rgba(0, 0, 0, 0.05)',
      },
      fontSize: {
        'body3': ['14px', {
          lineHeight: '140%',
        }],
        'button4': ['18px', {
          lineHeight: '100%',
        }],
        'input1': ['12px', {
          lineHeight: '120%',
        }],
        'input2': ['14px', {
          lineHeight: '120%',
        }],
        'input3': ['14.8px', {
          lineHeight: '120%',
        }],
        'label3': ['14px', {
          lineHeight: '120%',
        }],
        'label5': ['16px', {
          lineHeight: '120%',
        }],
        'link3': ['14.8px', {
          lineHeight: '120%',
        }],
        'sub1': ['18px', {
          lineHeight: '140%',
        }],
        'sub3': ['24px', {
          lineHeight: '120%',
        }],
      },
      fontFamily: {
        helveticaNeue: ["Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}