import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './navbar.module.scss'

const Navbar = (props) => {
  const router = useRouter()

  const { handleSidebar } = props
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const updateWindowDimensions = () => {
    const width = window.innerWidth
    if (width <= 600 || window.screen.width <= 600) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    updateWindowDimensions()
    window.addEventListener('resize', updateWindowDimensions)

    return () => {
      window.removeEventListener('resize', updateWindowDimensions)
    }
  }, [])
  return (
    <nav className={styles.nav}>
      <div className={styles.heading} onClick={() => Router.push('/')}>
        <h1 className={styles.h1}>TASKPRO SERVICES</h1>
        <p className={styles.p}>Absorb | Enhance | Execute</p>
      </div>

      {!isMobile && (
        <ul className={styles.ul}>
          <Link href='/' className={styles.links}>
            <li className={`${router.pathname === '/' && styles.active}`}>
                Home
            </li>
          </Link>
          <Link href='/about' className={styles.links}>
            <li className={`${router.pathname === '/about' && styles.active}`}>
                About
            </li>
          </Link>
          <Link href='/services' className={styles.links}>
            <li className={`${router.pathname === '/services' && styles.active}`}>
                Services
            </li>
          </Link>
          <Link href='/contact' className={styles.links}>
            <li className={`${router.pathname === '/contact' && styles.active}`}>
                Contact
            </li>
          </Link>
        </ul>
      )}
      {isMobile && (
        <div
          onClick={() => handleSidebar()}
          className={`${styles.menu_btn} ${menuOpen && styles.open}`}
        >
          <div className={styles.menu_btn__burger}></div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
