import React, { useEffect } from 'react'

import styles from './toggle-mode.module.scss'

const ToggleMode = () => {
  useEffect(() => {
    const theme = window.localStorage.getItem('theme')

    if (theme === 'dark') {
      document.getElementById('toggle').checked = true
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
  }, [])

  const handleClick = () => {
    const mode = document.body.classList[0]
    if (mode === 'light') {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    } else if (mode === 'dark') {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
      window.localStorage.setItem('theme', 'light')
    }
  }
  return (
    <div className={styles.toggle__container}>
      <span className={styles.light}>
        <svg height='24' width='24' viewBox='0 0 512 512'>
          <path
            d='M256 144c-61.75 0-112 50.25-112 112s50.25 112 112 112 112-50.25 112-112-50.25-112-112-112zm0 192c-44.188 0-80-35.812-80-80s35.812-80 80-80 80 35.812 80 80-35.812 80-80 80zm0-224c8.833 0 16-7.167 16-16V64c0-8.833-7.167-16-16-16s-16 7.167-16 16v32c0 8.833 7.167 16 16 16zm0 288c-8.833 0-16 7.167-16 16v32c0 8.833 7.167 16 16 16s16-7.167 16-16v-32c0-8.833-7.167-16-16-16zm124.438-245.833l22.625-22.625c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625 0l-22.625 22.625c-6.25 6.25-6.25 16.375 0 22.625s16.375 6.25 22.625 0zM131.562 357.834l-22.625 22.625c-6.25 6.249-6.25 16.374 0 22.624s16.375 6.25 22.625 0l22.625-22.624c6.25-6.271 6.25-16.376 0-22.625-6.249-6.251-16.375-6.272-22.625 0zM112 256c0-8.833-7.167-16-16-16H64c-8.833 0-16 7.167-16 16s7.167 16 16 16h32c8.833 0 16-7.167 16-16zm336-16h-32c-8.833 0-16 7.167-16 16s7.167 16 16 16h32c8.833 0 16-7.167 16-16s-7.167-16-16-16zm-316.459-85.833c6.251 6.25 16.376 6.25 22.625 0 6.251-6.25 6.251-16.375 0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625 0-6.25 6.25-6.25 16.375 0 22.625l22.625 22.625zm248.918 203.645c-6.271-6.25-16.376-6.25-22.625 0-6.251 6.25-6.271 16.375 0 22.625l22.625 22.625c6.249 6.25 16.374 6.25 22.624 0s6.25-16.375 0-22.625l-22.624-22.625z'
            fill='currentColor'
          ></path>
        </svg>
      </span>

      <label className={styles.switch}>
        <input type='checkbox' id='toggle' onClick={handleClick} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>

      <span className={styles.dark}>
        <svg height='32' width='32' viewBox='0 0 512 512'>
          <path
            d='M349.852 343.15c-49.875 49.916-131.083 49.916-181 0-49.916-49.918-49.916-131.125 0-181.021 13.209-13.187 29.312-23.25 47.832-29.812 5.834-2.042 12.293-.562 16.625 3.792 4.376 4.375 5.855 10.833 3.793 16.625-12.542 35.375-4 73.666 22.25 99.917 26.209 26.228 64.5 34.75 99.916 22.25 5.792-2.062 12.271-.582 16.625 3.793 4.376 4.332 5.834 10.812 3.771 16.625-6.521 18.519-16.604 34.622-29.812 47.831zM191.477 184.754c-37.438 37.438-37.438 98.354 0 135.771 40 40.021 108.125 36.416 143-8.168-35.959 2.25-71.375-10.729-97.75-37.084-26.375-26.354-39.333-61.771-37.084-97.729a90.21 90.21 0 00-8.166 7.21z'
            fill='currentColor'
          ></path>
        </svg>
      </span>
    </div>
  )
}

export default ToggleMode
