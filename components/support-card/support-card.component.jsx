import React from 'react'
import DataManagementLogo from '../../public/data-management.svg'
import EcommerceLogo from '../../public/ecommerce.svg'
import TechnicalSupportLogo from '../../public/technical-support.svg'
import SocialMediaLogo from '../../public/social-media.svg'

import styles from './support-card.module.scss'

const SupportCard = () => {
  return (
    <section className={styles.card}>
      <header>
        <h2 className={styles.h2}>
          How TaskPro Services supports your business
        </h2>
        <p className={styles.p}>
          We create tailor-made, pocket-friendly services for your business
          needs!
        </p>
      </header>
      <div className={styles.svg_container_main}>
        <div className={styles.svg_container}>
          <div className={styles.svg_container_number}>
            <img
              className={styles.svg}
              src={DataManagementLogo}
              alt='Data management'
            />
            <h3 className={styles.h3}>Data Management</h3>
            <p>
              We can manage all kinds of data for your business. We have around
              10 years experience in data sourcing, data scraping, data entry,
              data analysis & research.
            </p>
          </div>
        </div>
        <div className={styles.svg_container}>
          <img
            className={styles.svg}
            src={TechnicalSupportLogo}
            alt='Technical support'
          />
          <h3>Customer Support</h3>
          <p>
            Utilize our 12 years of experience in support services to
            multinationals & startups - we can enhance your current services to
            optimize customer experience.
          </p>
        </div>
        <div className={styles.svg_container}>
          <div className={styles.svg_container_number}>
            <img className={styles.svg} src={EcommerceLogo} alt='Ecommerce' />
            <h3>eCommerce via BechoDirect</h3>
            <p>
              We have 30+ years of expertise in Textile & Fabric industry and
              15+ years of experience in Information Technology and related
              services.
            </p>
          </div>
        </div>
        <div className={styles.svg_container}>
          <img
            className={styles.svg}
            src={SocialMediaLogo}
            alt='Social media'
          />
          <h3>Social Media Interactions</h3>
          <p>
            Effective social media management is the key to customer loyalty.
            TaskPro Services can help you achieve quick turnaround time for your
            social media management.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SupportCard
