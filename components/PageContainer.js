import React from 'react'
import NavBar, { NAV_BAR_HEIGHT } from './NavBar'
import Box from './Box'
import Footer from './Footer'

const PageContainer = ({ children }) => (
  <Box bg="PageBackground" pt={NAV_BAR_HEIGHT}>
    <NavBar />
    <Box minHeight={`calc(100vh - ${NAV_BAR_HEIGHT}px)`}>{children}</Box>
    <Footer />
  </Box>
)

export default PageContainer
