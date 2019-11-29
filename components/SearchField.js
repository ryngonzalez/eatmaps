import React from 'react'
import Field from './Field'
import { Search } from 'react-feather'

const SearchField = () => (
  <Field placeholder="Search for a craving…" iconStart={Search} />
)

export default SearchField
