import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
const theme = {
  light: {
    // backgroundColors: {foreground, background}
    // textColor
    // textHighlight: {}
  },
  dark: {
    bg: "#121212", // Dark Grey
    fg: "#525252", // Grey
    fgDark: "#252525", // Darker Grey
    hover: "rgba(28, 38, 64, .2)",
    hl: "#2CFF8E", // Spring Green
    border: "#147541", // Dark Spring Green
  },
  xs: "320px",
  sm: "480px",
  md: "768px",
  lg: "1200px",
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
