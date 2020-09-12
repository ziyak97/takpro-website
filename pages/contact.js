import styles from '../styles/Home.module.css'
import ContactMain from '../components/contact-main/contact-main.component'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ContactMain />
      </main>
    </div>
  )
}
