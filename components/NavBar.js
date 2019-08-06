import styled from 'styled-components'

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
  <NavBarContainer>
    <h1>Eatmaps</h1>
  </NavBarContainer>
)

export default NavBar
