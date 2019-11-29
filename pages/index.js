import Link from 'next/link'
import { PageContainer } from '../components'
import db from '../services/db.js'

const Index = props => (
  <PageContainer>
    <ul>
      {props.guides.map(guide => (
        <li key={guide.id}>
          <Link href="/guides/[id]" as={`/guides/${guide.id}`}>
            {guide.title}
          </Link>
        </li>
      ))}
    </ul>
  </PageContainer>
)

Index.getInitialProps = async function() {
  const querySnapshot = await db.collection('guides').get()
  const guides = []
  querySnapshot.forEach(guide => {
    guides.push({
      id: guide.id,
      ...guide.data(),
    })
  })

  return {
    guides,
  }
}

export default Index
