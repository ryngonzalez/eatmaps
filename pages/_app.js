import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Head from 'next/head'

import theme from '../shared/theme'

const GlobalStyle = createGlobalStyle`
/* System Fonts as used by GitHub */
*, *:before, *:after {
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0;
}
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/zza5iro.css" />
        </Head>
        <Container>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Container>
      </>
    )
  }
}
