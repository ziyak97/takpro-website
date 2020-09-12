import styles from '../styles/Home.module.css'
import BechoMain from '../components/becho-main/becho-main.component'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <BechoMain />
      </main>
    </div>
  )
}
