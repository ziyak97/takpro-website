import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Sidebar from '../components/sidebar/sidebar.component'
import Navbar from '../components/navbar/navbar.component'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer/footer.component'
import AboutMain from '../components/about-main/about-main.component'
import Team from '../components/team/team.component'
import AboutValues from '../components/about-values/about-values.component'
import BechoMain from '../components/becho-main/becho-main.component'

export default function About() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSidebar = () => {
    setSidebarOpen((prevState) => !prevState)
  }

  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (!theme) {
      window.document.querySelector('body').classList.add('light')
    } else {
      window.document.querySelector('body').classList.add(theme)
    }
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Taskpro Services</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Sidebar
        sidebarOpen={sidebarOpen}
        handleSidebar={() => handleSidebar()}
      />
      <Navbar handleSidebar={() => handleSidebar()} />
      <main className={styles.main}>
        <BechoMain />
      </main>
      <Footer />
    </div>
  )
}
