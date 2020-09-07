import React from 'react'

import styles from './team-card.module.scss'

const TeamCard = ({ src, name, role, hobbies }) => {
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <img
          width='160'
          height='188'
          className={styles.img}
          src={src}
          alt={src}
        />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
      </div>

      <div className={styles.back}>
        <p>{hobbies}</p>
      </div>

      <div className={styles.background}></div>
    </div>
  )
}

export default TeamCard
