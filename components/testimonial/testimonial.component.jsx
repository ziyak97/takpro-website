import React from 'react'

import TestimonialLogo from '../../public/testimonial.svg'

import styles from './testimonial.module.scss'

const Testimonial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.testimonial}>
        <h3 className={styles.h3}>
          „Having worked intensively with TaskPro Services on multiple projects,
          our partnership has been a professional and productive experience with
          impressive results to date. The team is responsive, full of ideas and
          delivers on their commitments. I can highly recommend TaskPro Services
          as a serious partner in customer solutions.”
        </h3>
        <div className={styles.container_small}>
          <img
            className={styles.img_small}
            src={TestimonialLogo}
            alt='Testimonial'
          />

          <p className={styles.p}>
            Mariana Masheva
            <br />
            Manager @ Beezer
          </p>
        </div>
      </div>
      <img className={styles.img} src={TestimonialLogo} alt='testimonial' />
    </div>
  )
}

export default Testimonial
