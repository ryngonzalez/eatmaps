import React from 'react'
import styled, { withTheme } from 'styled-components'
import Box from './Box'
import { themeGet } from '@styled-system/theme-get'

const ICON_SIZE = 'space.4'
const FIELD_HEIGHT = 'space.7'
const VERTICAL_PADDING = 'space.2'
const HORIZONTAL_PADDING = 'space.3'
const ICON_HORIZONTAL_MARGIN = 'space.2'

const FieldBackground = styled(Box).attrs({
  as: 'input',
  bg: 'FieldBackground',
  p: VERTICAL_PADDING,
  pl: HORIZONTAL_PADDING,
  pr: HORIZONTAL_PADDING,
  borderRadius: props => themeGet(FIELD_HEIGHT)(props) / 2,
  fontSize: 2,
  width: '100%',
})`
  appearance: none;
  outline: none;
  border: none;
  ${props => ({
    height: themeGet(FIELD_HEIGHT)(props),
    paddingLeft: props.includesIconStart
      ? themeGet(ICON_SIZE)(props) +
        themeGet(HORIZONTAL_PADDING)(props) +
        themeGet(ICON_HORIZONTAL_MARGIN)(props)
      : undefined,
    paddingRight: props.includesIconEnd
      ? themeGet(ICON_SIZE)(props) +
        themeGet(HORIZONTAL_PADDING)(props) +
        themeGet(ICON_HORIZONTAL_MARGIN)(props)
      : undefined,
  })}
`

const IconContainer = styled(Box).attrs({
  position: 'absolute',
  top: 0,
  bottom: 0,
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
})`
  pointer-events: none;
  ${props => ({
    left:
      props.side === 'start' ? themeGet(HORIZONTAL_PADDING)(props) : undefined,
    right:
      props.side === 'end' ? themeGet(HORIZONTAL_PADDING)(props) : undefined,
  })}
`

const Field = ({ iconStart, iconEnd, ...props }) => (
  <Box position="relative" width="248px">
    {iconStart && (
      <IconContainer side="start">
        {React.createElement(iconStart, {
          size: themeGet(ICON_SIZE)(props),
        })}
      </IconContainer>
    )}
    <FieldBackground
      includesIconStart={!!iconStart}
      includesIconEnd={!!iconEnd}
      {...props}
    />
    {iconEnd && (
      <IconContainer side="end">
        {React.createElement(iconEnd, {
          size: themeGet(ICON_SIZE)(props),
        })}
      </IconContainer>
    )}
  </Box>
)

export default withTheme(Field)
