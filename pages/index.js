import Link from 'next/link'
import { NavBar } from '../components'
import db from '../services/db.js'

const Index = props => (
  <div>
    <NavBar />
    <Link href="/about">
      <a>Hello</a>
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <ul>
      {props.guides.map(guide => (
        <li>
          <Link href="/guides/[id]" as={`/guides/${guide.id}`}>
            {guide.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
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
