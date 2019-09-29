import Link from 'next/link'
import { NavBar } from '../components'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.firebaseAuthDomain,
  databaseURL: process.env.firebaseDatabaseURL,
  projectId: 'eatmaps-24146',
  storageBucket: process.env.firebaseStorageBucket,
  messagingSenderId: process.env.firebaseMessagingSenderId,
  appId: process.env.firebaseAppId,
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()

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
          <a href={`/guides/${guide.id}`}>{guide.title}</a>
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
