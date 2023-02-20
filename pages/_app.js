import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import "../styles/mobileNavigation.css";
const theme = {
  light: {
    // backgroundColors: {foreground, background}
    // textColor
    // textHighlight: {}
  },
  dark: {
    fg: "#525252", // Grey
    fgDark: "#252525", // Dark Grey
    bg: "#121212", // Dark Dark Grey
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
