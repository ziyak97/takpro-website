import { NextSeo } from 'next-seo'

import styles from '../styles/Home.module.css'
import AboutMain from '../components/about-main/about-main.component'
import Team from '../components/team/team.component'
import AboutValues from '../components/about-values/about-values.component'

export default function About() {
  const SEO = {
    title: 'TaskPro Services - About',
    description:
      'Client-focused, forward-thinking people using mordern tools to help grow your business.',
    openGraph: {
      title: 'TaskPro Services - About',
      description:
        'Client-focused, forward-thinking people using mordern tools to help grow your business.',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />

      <div className={styles.container}>
        <main className={styles.main}>
          <AboutMain />
          <Team />
          <AboutValues />
        </main>
      </div>
    </>
  )
}
