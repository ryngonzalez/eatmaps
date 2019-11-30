import styled from 'styled-components'
import Box from './Box'
import Text from './Text'
import SearchField from './SearchField'
import Link from './Link'

const NavBarContainer = styled.div`
  background: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  padding: 8px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`

const NavBar = ({}) => (
  <Box
    bg="NavBarBackground"
    color="TextPrimary"
    p={3}
    position="fixed"
    top="0"
    left="0"
    width="100%"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    position="sticky"
  >
    <Link href="/">
      <Text fontFamily="termina" fontSize={4} letterSpacing={-1} as="h1">
        Eatmaps
      </Text>
    </Link>
    <Box display="flex" alignItems="center">
      <SearchField />
      <Box
        borderRadius="100%"
        height="36px"
        width="36px"
        backgroundColor="FieldBackground"
        ml="3"
      ></Box>
    </Box>
  </Box>
)

export default NavBar
