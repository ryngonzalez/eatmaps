import { useRouter } from 'next/router'
import db from '../../services/db.js'
import { PageContainer } from '../../components'
import { useState } from 'react'
import useYelpSearch from '../../hooks/use_yelp_search'
import useGuideListener from '../../hooks/use_guide_listener'

export default function Guide(props) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const { isLoading, searchResults, search } = useYelpSearch()
  const guideListener = useGuideListener(props.guide.id)

  const places = guideListener.places || props.places

  return (
    <PageContainer>
      <h1>{props.guide.title}</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          search(searchQuery)
        }}
      >
        <input
          type="text"
          value={searchQuery}
          placeholder="Search for a place..."
          onChange={e => {
            setSearchQuery(e.target.value)
          }}
        />
        <button type="submit">Search</button>
      </form>

      <div style={{ float: 'left' }}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          searchResults.map(place => {
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
                }}
              >
                <h2>{place.name}</h2>
                <div style={{ clear: 'both' }}>
                  {place.location &&
                    place.location.display_address.map(line => (
                      <div>{line}</div>
                    ))}
                </div>
              </div>
            )
          })
        )}
      </div>

      <div style={{ float: 'right' }}>
        {places.map(place => {
          return (
            <div key={place.id}>
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
                }}
              >
                Delete
              </button>
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
