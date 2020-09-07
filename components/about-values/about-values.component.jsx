import React from 'react'
import HonestLogo from '../../public/honest.svg'
import MindLogo from '../../public/mind.svg'
import ResponsibleLogo from '../../public/responsible.svg'
import EmpathyLogo from '../../public/empathy.svg'

import styles from './about-values.module.scss'

const AboutValues = () => {
  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.h3}>THINGS WE VALUE</h3>
        <h2 className={styles.h2}>Believability at the core</h2>
        <p className={styles.p}>
          As a remote team of independent thinkers, we share the same values
          that make things work like a charm.
        </p>
      </header>
      <div className={styles.svg_container_main}>
        <div className={styles.svg_container}>
          <div className={styles.svg_container_number}>
            <img className={styles.svg} src={HonestLogo} alt='honest' />
            <h3>Transparency and Truthfulness</h3>
            <p className={styles.p_items}>
              We communicate with each other honestly, even if the truth
              violates one's ego. We believe that in the long term only through
              good and honest communication with each other we can generate
              added value for our clients.
            </p>
          </div>
        </div>
        <div className={styles.svg_container}>
          <img className={styles.svg} src={MindLogo} alt='mind' />
          <h3>Openness of mind</h3>
          <p className={styles.p_items}>
            In our case transparency means that everyone's opinion is open for
            discussion by anyone on the team. That is why it is so important for
            us to keep our mind open and treat every feedback with humility, a
            chance to look at things from another perspective, and as an
            opportunity to improve our skills.
          </p>
        </div>
        <div className={styles.svg_container}>
          <div className={styles.svg_container_number}>
            <img
              className={styles.svg}
              src={ResponsibleLogo}
              alt='responsible'
            />
            <h3>Commitment and Responsibility</h3>
            <p className={styles.p_items}>
              Remote work gives great possibilities, but comes with great
              responsibility. At TaskPro Services, each team member is
              responsible for a certain part of a project and it’s on them to
              deliver the best solution for it. For us it’s crucial to keep
              things this way and run projects as a well-oiled machine.
            </p>
          </div>
        </div>
        <div className={styles.svg_container}>
          <img className={styles.svg} src={EmpathyLogo} alt='empathy' />
          <h3>Empathy and Unselfishness</h3>
          <p className={styles.p_items}>
            Those are two very important factors at TaskPro Services. We believe
            that every person deserves valuable relationships with other people
            and a pleasant work environment. We try to help each other and give
            as much as we take ourselves.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutValues
