import styles from '../styles/Home.module.css'
import SupportCard from '../components/support-card/support-card.component'
import MainSection from '../components/main-section/main-section.component'
import Testimonial from '../components/testimonial/testimonial.component'
import World from '../components/world/world.component'
import Growth from '../components/growth/growth.component'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <MainSection />
        <SupportCard />
        <Testimonial />
        <World />
        <Growth />
      </main>
    </div>
  )
}
