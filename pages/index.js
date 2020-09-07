import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Sidebar from '../components/sidebar/sidebar.component'
import Navbar from '../components/navbar/navbar.component'
import styles from '../styles/Home.module.css'
import SupportCard from '../components/support-card/support-card.component'
import MainSection from '../components/main-section/main-section.component'
import Testimonial from '../components/testimonial/testimonial.component'
import TeamCard from '../components/team-card/team-card.component'
import Footer from '../components/footer/footer.component'
import World from '../components/world/world.component'
import Growth from '../components/growth/growth.component'
import Cool from '../components/cool/cool.component'

export default function Home() {
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
        <MainSection />
        <SupportCard />
        <Testimonial />
        <World />
        <Growth />
      </main>
      <Footer />
    </div>
  )
}
