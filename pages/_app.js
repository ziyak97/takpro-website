import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

import Sidebar from '../components/sidebar/sidebar.component'
import Navbar from '../components/navbar/navbar.component'
import Footer from '../components/footer/footer.component'

import '../styles/globals.scss'
import '../styles/variables.scss'
import '../components/cool/cool.scss'

function MyApp(props) {
  const { Component, pageProps, footer } = props
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSidebar = () => {
    setSidebarOpen((prevState) => !prevState)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
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
      <DefaultSeo {...SEO} />
      <Sidebar
        sidebarOpen={sidebarOpen}
        handleSidebar={() => handleSidebar()}
        closeSidebar={closeSidebar}
      />
      <Navbar handleSidebar={() => handleSidebar()} />

      <Component {...pageProps} />
      <Footer footer={footer} />
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/footer`)
  const [footer] = await res.json()

  return {
    footer,
  }
}

export default MyApp
