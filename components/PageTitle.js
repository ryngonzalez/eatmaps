import Text from './Text'
import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

const UnderlinedText = styled(Text)`
  text-decoration-line: underline;
  text-decoration-color: ${themeGet('colors.Accent')};
`

export default ({ children }) => (
  <UnderlinedText fontFamily="termina" fontSize={6} letterSpacing={-1} as="h2">
    {children}
  </UnderlinedText>
)
