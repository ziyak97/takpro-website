import Image from 'next/image'

import styles from './becho-card.module.scss'

const BechoCard = (props) => {
	const { heading, description, image } = props
	return (
		<div className={styles.container}>
			<Image
				width={110}
				height={110}
				className={styles.img}
				src={image}
				alt='card-logo'
			/>
			<h3>{heading}</h3>
			<p>{description}</p>
		</div>
	)
}

export default BechoCard
