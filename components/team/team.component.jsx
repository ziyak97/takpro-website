import React from 'react'
import TeamCard from '../team-card/team-card.component'
import ZiyakLogo from '../../public/ziyak.png'
import ThomasLogo from '../../public/thomas.svg'
import MichaelLogo from '../../public/michael.svg'
import NickLogo from '../../public/nick.svg'
import AllanLogo from '../../public/allan.svg'
import KeithLogo from '../../public/keith.svg'

import styles from './team.module.scss'

const Team = () => {
  return (
    <section className={styles.container}>
      <div>
        <div>
          <h3 className={styles.h3}>WE ARE</h3>
          <h2 className={styles.h2}>TaskPro Services Team</h2>
          <p className={styles.p}>Working to help you with your customers.</p>
        </div>
      </div>
      <div className={styles.card_container}>
        <TeamCard
          src={ThomasLogo}
          name='Thomas'
          role='CEO'
          hobbies='Always busy with customers.'
        />
        <TeamCard
          src={MichaelLogo}
          name='Michael'
          role='Analyst'
          hobbies='All-rounder.'
        />
        <TeamCard
          src={NickLogo}
          name='Nick'
          role='Q.A.'
          hobbies='Makes sure everything works well.'
        />
        <TeamCard
          src={ZiyakLogo}
          name='Ziyak Jehangir'
          role='Fullstack Developer'
          hobbies="When he's not coding he spends his time kickboxing."
        />
        <TeamCard
          src={AllanLogo}
          name='Allan'
          role='Service'
          hobbies='Friendly and always wanting to help.'
        />
        <TeamCard
          src={KeithLogo}
          name='Keith'
          role='Support'
          hobbies='Helps with customer support.'
        />
      </div>
    </section>
  )
}

export default Team
