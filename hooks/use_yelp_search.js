import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

export default function useYelpSearch() {
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  return {
    isLoading,
    searchResults,
    search: async searchTerm => {
      setIsLoading(true)
      const yelpResponse = await fetch(`/api/yelp?text=${searchTerm}`)
      const yelpResponseJson = await yelpResponse.json()
      setIsLoading(false)
      setSearchResults(yelpResponseJson)
    },
  }
}
