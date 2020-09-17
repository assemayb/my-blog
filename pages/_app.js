import React from "react";
import NextApp from "next/app";

import theme from "../theme";
import { ThemeProvider } from "theme-ui";
import { StaticKitProvider } from "@statickit/react";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StaticKitProvider site="619458d21c8c">
          <Component {...pageProps} />
        </StaticKitProvider>
      </ThemeProvider>
    );
  }
}
