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
  const { Component, pageProps, navigation, footer } = props
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
        navigation={navigation}
        sidebarOpen={sidebarOpen}
        handleSidebar={() => handleSidebar()}
        closeSidebar={closeSidebar}
      />
      <Navbar navigation={navigation} handleSidebar={() => handleSidebar()} />

      <Component {...pageProps} />
      <Footer footer={footer} />
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

MyApp.getInitialProps = async () => {
  const resNav = await fetch(`${publicRuntimeConfig.API_URL}/navigation`)
  let navigation = await resNav.json()
  navigation = navigation.sort((a, b) => a.Position - b.Position)
  const resFooter = await fetch(`${publicRuntimeConfig.API_URL}/footer`)
  let footer = await resFooter.json()
  footer = footer[0]

  return {
    navigation,
    footer,
  }
}

export default MyApp
