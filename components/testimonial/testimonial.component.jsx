import React from 'react'
import Slider from 'react-slick'

import TestimonialLogo from '../../public/testimonial.svg'

import styles from './testimonial.module.scss'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 7000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Testimonial = (props) => {
  const { testimonials } = props
  return (
    <div className={styles.container}>
      <Slider className={styles.testimonial} {...settings}>
        {testimonials.map((testimonial) => (
          <div>
            <h3 className={styles.h3}>{testimonial.Testimonial}</h3>
            <div className={styles.container_small}>
              <img
                className={styles.img_small}
                src={TestimonialLogo}
                alt='Testimonial'
              />

              <p className={styles.p}>
                {testimonial.Person}
                <br />
                {testimonial.Role}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      <img className={styles.img} src={TestimonialLogo} alt='testimonial' />
    </div>
  )
}

export default Testimonial
