import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Anchor = styled.a`
  &:hover {
    cursor: pointer;
  }
  &:visited {
    color: inherit;
  }
  &:active {
    color: inherit;
  }
`

export default ({ children, ...props }) => (
  <Link {...props}>
    <Anchor>{children}</Anchor>
  </Link>
)
