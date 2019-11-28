import styled from 'styled-components'
import Box from './Box'

const Field = styled(Box).attrs({
  as: 'input',
  bg: 'FieldBackground',
  p: 2,
  pl: 3,
  pr: 3,
  borderRadius: 3,
  fontSize: 2,
  width: '100%',
})`
  appearance: none;
  outline: none;
  border: none;
`

export default Field
