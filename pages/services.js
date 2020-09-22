import fetch from 'isomorphic-unfetch'

import styles from '../styles/Home.module.css'
import BechoMain from '../components/becho-main/becho-main.component'

export default function About(props) {
  const { cards } = props
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <BechoMain cards={cards} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/services-cards?_embed`)
  let cards = await res.json()
  cards = cards.sort((a, b) => a.Position - b.Position)
  return {
    props: {
      cards,
    },
  }
}
