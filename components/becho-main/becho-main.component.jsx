import React from 'react'
import Link from 'next/link'

import BechoCardContainer from '../becho-card-container/becho-card-container.component'

import styles from './becho-main.module.scss'

const BechoMain = (props) => {
  const { cards } = props
  return (
    <section className={styles.container}>
      <div className={styles.container_top}>
        <h1 className={styles.h1}>Meet Becho Direct</h1>
        <p>
          Becho Direct (a TaskPro Services company) offers professional
          eCommerce services to manufacturers and startups from the Fashion and
          Textile industry helping them to achieve higher profits with minimum
          overheads. From Onboarding to Sales - we have all on offer under a
          single roof!
        </p>
      </div>
      <BechoCardContainer cards={cards} />
      <div className={styles.container_bottom}>
        <h2>So are you ready to go online?</h2>
        <Link href='/contact'>
          <a className={styles.button}>Get in touch!</a>
        </Link>
      </div>
    </section>
  )
}

export default BechoMain
