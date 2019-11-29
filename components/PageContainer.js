import React from 'react'
import NavBar, { NAV_BAR_HEIGHT } from './NavBar'
import Box from './Box'
import Footer from './Footer'

const PageContainer = ({ children }) => (
  <Box bg="PageBackground">
    <NavBar />
    <Box minHeight="100vh">{children}</Box>
    <Footer />
  </Box>
)

export default PageContainer
