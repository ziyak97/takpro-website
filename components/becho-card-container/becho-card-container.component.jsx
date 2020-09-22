import BechoCard from '../becho-card/becho-card.component'

import styles from './becho-card-container.module.scss'

const BechoCardContainer = (props) => {
  const { cards } = props
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <BechoCard
          key={card.id}
          heading={card.Heading}
          description={card.Description}
          image={card.Image_Url}
        />
      ))}
    </div>
  )
}

export default BechoCardContainer
