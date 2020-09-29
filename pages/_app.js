import { useState, useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
const tawkTo = require('tawkto-react')
import getConfig from 'next/config'

import SEO from '../next-seo.config'

import Sidebar from '../components/sidebar/sidebar.component'
import Navbar from '../components/navbar/navbar.component'
import Footer from '../components/footer/footer.component'

import '../styles/globals.scss'
import '../styles/variables.scss'
import '../components/cool/cool.scss'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function MyApp(props) {
  const { publicRuntimeConfig } = getConfig()

  const { Component, pageProps } = props
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSidebar = () => {
    setSidebarOpen((prevState) => !prevState)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  useEffect(() => {
    const tawkToPropertyId = publicRuntimeConfig.TAWK_KEY
    const theme = window.localStorage.getItem('theme')

    tawkTo(tawkToPropertyId)

    if (!theme) {
      window.document.querySelector('body').classList.add('light')
    } else {
      window.document.querySelector('body').classList.add(theme)
    }
  }, [])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Sidebar
        sidebarOpen={sidebarOpen}
        handleSidebar={() => handleSidebar()}
        closeSidebar={closeSidebar}
      />
      <Navbar handleSidebar={() => handleSidebar()} />

      <Component {...pageProps} />
      <Footer />
    </>
  )
}

// const { publicRuntimeConfig } = getConfig()

// MyApp.getInitialProps = async () => {
//   const res = await fetch(`${publicRuntimeConfig.API_URL}/footer`)
//   const [footer] = await res.json()

//   return {
//     footer,
//   }
// }

export default MyApp
