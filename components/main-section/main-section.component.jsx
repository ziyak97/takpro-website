import React from 'react'
import Link from 'next/link'

import styles from './main-section.module.scss'
import Cool from '../cool/cool.component'

const MainSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.div}>
        <h4 className={styles.h4}>SERVICE WITH A PERSONAL TOUCH</h4>
        <h2 className={styles.h2}>
          Providing clients with
          <br />
          customer solutions
        </h2>
        <p className={styles.p}>
          Let us maximize your business potential with our expertise and
          innovative solutions. You focus on your business and we take care of
          the rest.
        </p>
        <Link href='/contact'>
          <a className={styles.button}>Get in touch!</a>
        </Link>
      </div>
      <Cool />
    </section>
  )
}

export default MainSection
