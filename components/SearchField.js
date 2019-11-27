import React from 'react'
import Field from './Field'
import { Search } from 'react-feather'
import Box from './Box'
import styled from 'styled-components'

const IconContainer = styled(Box).attrs({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 3,
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
})`
  pointer-events: none;
`

const SearchField = ({}) => (
  <Box position="relative" width="248px">
    <Field placeholder="Search for a map…" />
    <IconContainer>
      <Search strokeWidth={3} size={16} />
    </IconContainer>
  </Box>
)

export default SearchField
