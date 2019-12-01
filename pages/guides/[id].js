import { useRouter } from 'next/router'
import db from '../../services/db.js'
import { PageContainer } from '../../components'
import { useState } from 'react'
import fetch from 'isomorphic-unfetch'

export default function Guide(props) {
  const router = useRouter()
  const [text, setText] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const places = props.places

  return (
    <PageContainer>
      <h1>{props.guide.title}</h1>
      <form
        onSubmit={async e => {
          e.preventDefault()
          const yelpResponse = await fetch(`/api/yelp?text=${text}`)
          const yelpResponseJson = await yelpResponse.json()
          setSearchResults(yelpResponseJson)
        }}
      >
        <input
          type="text"
          value={text}
          placeholder="Search for a place..."
          onChange={e => {
            setText(e.target.value)
          }}
        />
      </form>

      <div style={{ float: 'right' }}>
        {places.map(place => {
          return (
            <div key={place.yelp_id}>
              <h2>{place.name}</h2>
              <img
                style={{
                  float: 'left',
                  objectFit: 'cover',
                  width: 100,
                  height: 100,
                }}
                src={place.image_url}
              />
              <div style={{ clear: 'both' }}>
                {place.display_address.map(line => (
                  <div>{line}</div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  db.collection('guides')
                    .doc(props.guide.id)
                    .collection('places')
                    .doc(place.id)
                    .delete()
                    .then(() => {
                      router.push(`/guides/${props.guide.id}/`)
                    })
                }}
              >
                Delete
              </button>
            </div>
          )
        })}
      </div>

      <div style={{ float: 'left' }}>
        {searchResults.map(place => {
          return (
            <div
              key={place.id}
              onClick={() => {
                const record = {
                  name: place.name,
                  coordinates: place.coordinates,
                  display_address: place.location.display_address,
                  image_url: place.image_url,
                  yelp_id: place.id,
                  yelp_data: JSON.stringify(place),
                }
                db.collection('guides')
                  .doc(props.guide.id)
                  .collection('places')
                  .add(record)
                  .then(() => router.push(`/guides/${props.guide.id}/`))
              }}
            >
              <h2>{place.name}</h2>
              <img
                style={{
                  float: 'left',
                  objectFit: 'cover',
                  width: 100,
                  height: 100,
                }}
                src={place.image_url}
              />
              <div style={{ clear: 'both' }}>
                {place.location &&
                  place.location.display_address.map(line => <div>{line}</div>)}
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ clear: 'both' }} />
    </PageContainer>
  )
}

Guide.getInitialProps = async function(context) {
  const { id } = context.query
  const querySnapshot = await db.collection('guides').doc(id)
  const doc = await querySnapshot.get()
  const placesSnapshot = await db
    .collection('guides')
    .doc(id)
    .collection('places')
    .get()

  const places = []
  placesSnapshot.forEach(place =>
    places.push({ id: place.id, ...place.data() }),
  )

  return {
    guide: {
      id,
      ...doc.data(),
    },
    places,
  }
}
