import React from 'react'
import MapLogo from '../../public/map.png'
import TPSLogo from '../../public/tps.svg'
import EmailLogo from '../../public/email.svg'
import PhoneLogo from '../../public/phone.svg'

import styles from './contact-main.module.scss'

const ContactMain = () => {
  return (
    <section className={styles.container}>
      <div className={styles.top_container}>
        <h1 className={styles.h1}>Let's Talk</h1>
        <p>
          Feel free to contact us and we will get back to you as soon as we can.
        </p>
      </div>
      <div className={styles.contact_container}>
        <div className={styles.info_container}>
          <div>
            <h3>Email</h3>
            <div className={styles.img_container}>
              <img src={EmailLogo} alt='email' />
              <p>support@taskproservices.com</p>
            </div>
          </div>
          <div>
            <h3>Phone</h3>
            <div className={styles.img_container}>
              <img src={PhoneLogo} alt='phone' />
              <p>+91 9082575545</p>
            </div>
          </div>
        </div>
        <div className={styles.office_container}>
          <h3>Head Office</h3>
          <p>214, Shah Heritage,</p>
          <p>Seawoods, Nerul (W),</p>
          <p>Navi Mumbai - 400706,</p>
          <p> Maharashtra,</p>
          <p>India.</p>
        </div>

        <a
          href='https://www.google.com/maps/place/TaskPro+Services/@19.0180971,73.0132723,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7c3bfe5dffc89:0x40cee6a3e96fefe5!8m2!3d19.018092!4d73.015461'
          target='_blank'
          rel='noopener norefferer'
          title='Open map in new tab'
          className={styles.map_container}
        >
          <img className={styles.map} src={MapLogo} alt='map' />
          <div className={styles.logo}>
            <img src={TPSLogo} alt='TPS Logo' />
          </div>
        </a>
      </div>
    </section>
  )
}

export default ContactMain
