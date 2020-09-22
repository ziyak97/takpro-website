import React from 'react'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import { useRouter } from 'next/router'

import TPSLogo from '../../public/tps.png'
import ToggleMode from '../toggle-mode/toggle-mode.component'

import styles from './footer.module.scss'

const Footer = (props) => {
  const { footer } = props
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
            <h2>{footer.Title}</h2>
            <p>{footer.Description}</p>
            {router.pathname !== '/contact' ? (
              <Link href='/contact'>
                <a className={styles.button}>{footer.Button_Text}</a>
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
              url={footer.Video_Url}
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
            <p>{footer.Service_1}</p>
            <p>{footer.Service_2}</p>
            <p>{footer.Service_3}</p>
            <p>{footer.Service_4}</p>
            <p>{footer.Service_5}</p>
            <p>{footer.Service_6}</p>
          </div>
          <div className={styles.bottom_expertise}>
            <h3>Expertise In</h3>
            <p>{footer.Expertise_1}</p>
            <p>{footer.Expertise_2}</p>
            <p>{footer.Expertise_3}</p>
            <p>{footer.Expertise_4}</p>
            <p>{footer.Expertise_5}</p>
          </div>
          <div className={styles.bottom_office}>
            <h3>Head Office</h3>
            <p>{footer.Office_1}</p>
            <p>{footer.Office_2}</p>
            <p>{footer.Office_3}</p>
            <p>{footer.Office_4}</p>
            <p>{footer.Office_5}</p>
            <p>{footer.Office_6}</p>
          </div>
        </div>
        <div className={styles.copyright}>{footer.Copyright}</div>
      </div>
    </footer>
  )
}

export default Footer
