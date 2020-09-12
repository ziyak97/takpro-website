import styles from '../styles/Home.module.css'
import AboutMain from '../components/about-main/about-main.component'
import Team from '../components/team/team.component'
import AboutValues from '../components/about-values/about-values.component'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <AboutMain />
        <Team />
        <AboutValues />
      </main>
    </div>
  )
}
