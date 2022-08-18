module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      screens: {
        xxs: "340px",
        xs: "425px",
      },
      animation: {
        bg: "bg 50s infinite ease",
        blob: "blob 25s infinite ease",
        blob2: "blob 15s infinite ease",
        blob3: "blob 7s infinite",
        updown: "updown 2s infinite ease",
      },
      width: {
        128: "32rem",
      },
      height: {
        128: "32rem",
      },
      colors: {
        slate: {
          1000: "#0b061d",
        },
      },
      blur: {
        "4xl": "72px",
        "5xl": "84px",
        "6xl": "100px",
      },
      keyframes: {
        blob: {
          "0%": {
            backgroundPosition: "0%",
          },
          "50%": {
            backgroundPosition: "100%",
          },
          "100%": {
            backgroundPosition: "0%",
          },
        },
        bg: {
          "0%": {
            backgroundPosition: "0%",
          },
          "50%": {
            backgroundPosition: "100%",
          },
          "100%": {
            backgroundPosition: "0%",
          },
        },
        updown: {
          "0%": {
            transform: "translateY(0)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(50%)",
            opacity: 1,
          },
        },
      },
    },
  },
};
