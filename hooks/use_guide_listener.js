import React, { useState, useEffect } from 'react'
import db from '../services/db.js'

export default function useGuideListener(guideId) {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    return db
      .collection('guides')
      .doc(guideId)
      .collection('places')
      .onSnapshot(function(querySnapshot) {
        const places = []
        querySnapshot.forEach(function(doc) {
          places.push({ id: doc.id, ...doc.data() })
        })
        setPlaces(places)
      })
  }, [guideId])

  return { places }
}
