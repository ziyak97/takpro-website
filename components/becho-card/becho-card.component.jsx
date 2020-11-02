import styles from './becho-card.module.scss'

const BechoCard = (props) => {
	const { heading, description, image } = props
	return (
		<div className={styles.container}>
			<img className={styles.img} src={image} alt='card-logo' />
			<h3>{heading}</h3>
			<p>{description}</p>
		</div>
	)
}

export default BechoCard
