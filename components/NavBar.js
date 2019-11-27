import styled from 'styled-components'
import Box from './Box'
import Text from './Text'
import SearchField from './SearchField'

export const NAV_BAR_HEIGHT = 48

const NavBar = ({}) => (
  <Box
    bg="NavBarBackground"
    color="TextPrimary"
    p={2}
    boxShadow="medium"
    position="fixed"
    top="0"
    left="0"
    width="100%"
    height={NAV_BAR_HEIGHT}
    display="flex"
    alignItems="center"
    justifyContent="space-between"
  >
    <Text fontSize={4} letterSpacing={-1} as="h1">
      Eatmaps
    </Text>
    <SearchField />
  </Box>
)

export default NavBar
