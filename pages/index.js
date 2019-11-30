import { PageTitle, PageContainer, Link } from '../components'
import db from '../services/db.js'

const Index = props => (
  <PageContainer>
    {props.guides.map(guide => (
      <Link href="/guides/[id]" as={`/guides/${guide.id}`} key={guide.id}>
        <PageTitle>{guide.title}</PageTitle>
      </Link>
    ))}
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
