import { useState, useEffect } from 'react'

import Sidebar from '../components/sidebar/sidebar.component'
import Navbar from '../components/navbar/navbar.component'
import Footer from '../components/footer/footer.component'

import '../styles/globals.css'
import '../styles/variables.scss'
import '../components/cool/cool.scss'

function MyApp({ Component, pageProps }) {
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
    <>
      <Sidebar
        sidebarOpen={sidebarOpen}
        handleSidebar={() => handleSidebar()}
      />
      <Navbar handleSidebar={() => handleSidebar()} />

      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
