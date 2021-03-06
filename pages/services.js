import fetch from 'isomorphic-unfetch'

import styles from '../styles/Home.module.css'
import BechoMain from '../components/becho-main/becho-main.component'

export default function About(props) {
  const { cards, services } = props
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <BechoMain services={services} cards={cards} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const { API_URL } = process.env

  const resServices = await fetch(`${API_URL}/services`)
  const [services] = await resServices.json()

  const resCards = await fetch(`${API_URL}/services-cards`)
  let cards = await resCards.json()
  cards = cards.sort((a, b) => a.Position - b.Position)
  return {
    props: {
      cards,
      services,
    },
    revalidate: 1,
  }
}
