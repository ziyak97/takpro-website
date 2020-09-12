import React from 'react'
import Link from 'next/link'

import TeamLogo from '../../public/team.svg'

import styles from './about-main.module.scss'

const AboutMain = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.div}>
          <h4 className={styles.h4}>ABOUT US</h4>
          <h1 className={styles.h1}>We are TakPro Services</h1>
          <p className={styles.p}>
            Not your everyday solutions team but a partner that will help your
            business grow with modern tools more than you thought it's possible.
          </p>
          <Link href='#team'>
            <a className={styles.button}>Meet the team</a>
          </Link>
        </div>
        <img className={styles.img} src={TeamLogo} alt='team' />
      </div>
      <div className={styles.bottom_container}>
        <h3 className={styles.h3}>Client-focused, forward-thinking people</h3>
        <p>
          We are a team of highly motivated professionals from different
          verticals and industries. Our overall experience in customer service
          is 14+ years and we have delivered excellent support services (front
          end and back end) to clients from different parts of the world.
        </p>
      </div>
    </section>
  )
}

export default AboutMain
