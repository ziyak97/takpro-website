import React from 'react'

import styles from './growth.module.scss'

const Growth = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text_container}>
        <h2 className={styles.h2}>Let us help you grow your business</h2>
        <p className={styles.p}>
          Write to us at support@taskproservices.com today. We can arrange for a
          Skype call with our project expert to understand your needs and
          explain in detail how we can help your business!
        </p>
      </div>
      <div className={styles.video_container}>
        <video className={styles.video} autoPlay loop muted>
          <source src='/lightbulb.mp4' type='video/mp4' />
        </video>
      </div>
    </section>
  )
}

export default Growth
