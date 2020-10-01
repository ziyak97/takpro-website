import React from 'react'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import { useRouter } from 'next/router'

import TPSLogo from '../../public/tps.png'
import ToggleMode from '../toggle-mode/toggle-mode.component'

import styles from './footer.module.scss'

const Footer = () => {
  const router = useRouter()

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a className={styles.scroll_button} onClick={handleClick}>
          <svg width='16' height='22'>
            <path
              d='M8 21V1M1 8l7-7 7 7'
              fill='none'
              fillRule='evenodd'
              stroke='#FFF'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
            ></path>
          </svg>
        </a>
        <div className={styles.video_container}>
          <div className={styles.video_text}>
            <h2>HOW CAN WE HELP YOUR BUSINESS?</h2>
            <p>
              Check out how we can help your business and if you have any
              queries feel free to get in touch
            </p>
            {router.pathname !== '/contact' ? (
              <Link href='/contact'>
                <a className={styles.button}>Contact us</a>
              </Link>
            ) : (
              <a onClick={handleClick} className={styles.button}>
                Contact us
              </a>
            )}
          </div>
          <div className={styles.player_wrapper}>
            <ReactPlayer
              className={styles.player}
              width='100%'
              height='100%'
              url='https://www.youtube.com/watch?v=XfpYXQd8rgQ&ab_channel=TaskProServices'
            />
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.bottom_logo}>
            <img className={styles.img} src={TPSLogo} alt='TPS Logo' />
            <ToggleMode />
          </div>
          <div className={styles.bottom_clients}>
            <h3>Serving Clients in</h3>
            <p>E-commerce</p>
            <p>Online Entertainment</p>
            <p>Digital Media</p>
            <p>Travel Industry</p>
            <p>Multinational Retail</p>
            <p>SaaS</p>
          </div>
          <div className={styles.bottom_expertise}>
            <h3>Expertise in</h3>
            <p>E-mail Support</p>
            <p>Chat Support</p>
            <p>Content Management</p>
            <p>Social Media Management</p>
            <p>Data Entry</p>
          </div>
          <div className={styles.bottom_office}>
            <h3>Head Office</h3>
            <p>214, Shah Heritage,</p>
            <p>Seawoods, Nerul (W),</p>
            <p>Navi Mumbai, 400706, Maharashtra,</p>
            <p>India.</p>
            <p>Tel: +91 9082575545</p>
          </div>
        </div>
        <div className={styles.copyright}>Copyright © TaskPro Services</div>
      </div>
    </footer>
  )
}

export default Footer
