import { useRouter } from 'next/router'
import db from '../../services/db.js'
import { PageContainer } from '../../components'

export default function Guide(props) {
  const router = useRouter()

  return (
    <PageContainer>
      <h1>{props.guide.title}</h1>
    </PageContainer>
  )
}

Guide.getInitialProps = async function(context) {
  const { id } = context.query
  const querySnapshot = await db.collection('guides').doc(id)
  const doc = await querySnapshot.get()

  return {
    guide: doc.data(),
  }
}
