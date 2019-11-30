import React from 'react'
import NavBar, { NAV_BAR_HEIGHT } from './NavBar'
import Box from './Box'
import Footer from './Footer'

const PageContainer = ({ children }) => (
  <Box maxWidth={960} m="0 auto">
    <NavBar />
    <Box bg="PageBackground" p={3}>
      <Box minHeight="100vh">{children}</Box>
      <Footer />
    </Box>
  </Box>
)

export default PageContainer
