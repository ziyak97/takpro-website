import React from 'react'
import BechoCard from '../becho-card/becho-card.component'
import OnboardingLogo from '../../public/onboarding.svg'
import InventoryLogo from '../../public/inventory.svg'
import ReturnLogo from '../../public/return.svg'
import CRMLogo from '../../public/crm.svg'
import PromotionLogo from '../../public/promotion.svg'
import ReportLogo from '../../public/report.svg'

import styles from './becho-card-container.module.scss'

const BechoCardContainer = () => {
  return (
    <div className={styles.container}>
      <BechoCard
        heading='On-boarding – Documentation and Registration'
        description='Creating accounts, setting up services and policies on multiple online websites & marketplaces'
        image={OnboardingLogo}
      />
      <BechoCard
        heading='Content and Inventory Management'
        description='Creating and uploading product listings & Managing inventories on multiple marketplaces simultaneously'
        image={InventoryLogo}
      />
      <BechoCard
        heading='Orders, Returns and Refunds Management'
        description='Daily order processing, managing returns, exchanges and refunds (online)'
        image={ReturnLogo}
      />
      <BechoCard
        heading='CRM'
        description='Handle pre and post sale enquiries, managing account health and customer retention        '
        image={CRMLogo}
      />
      <BechoCard
        heading='Promotions'
        description='Managing promotions on different marketplaces'
        image={PromotionLogo}
      />
      <BechoCard
        heading='Reporting'
        description='Sending periodic reports on sales performance and account health'
        image={ReportLogo}
      />
    </div>
  )
}

export default BechoCardContainer
