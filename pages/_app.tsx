import type { AppProps } from "next/app";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import "github-markdown-css";
import { useState } from "react";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    setTheme((last) => (last === "dark" ? "light" : "dark"));
  };
  return (
    <GeistProvider themeType={theme}>
      <CssBaseline />
      <Component onClick={switchTheme} {...pageProps} />
    </GeistProvider>
  );
}
