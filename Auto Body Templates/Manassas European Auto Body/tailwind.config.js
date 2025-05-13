module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#EE0405',
      },
      backgroundImage: {
        'site-sm': "url('./assets/site-bg.png')",
        'site-lg': "url('./assets/site-bg.png')",
        // banner: "url('./assets/bg-video.mp4')",
        services: "url('./assets/services.png')",
      },
      backgroundSize: {
        services: '90%',
        'site-sm': '100%',
        'site-lg': '100%',
      },
      zIndex: {
        site: -2,
      },
    },
  },
  plugins: [],
};
