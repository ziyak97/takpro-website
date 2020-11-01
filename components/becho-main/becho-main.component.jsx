import Link from 'next/link'

import BechoCardContainer from '../becho-card-container/becho-card-container.component'

import styles from './becho-main.module.scss'

const BechoMain = (props) => {
	const { cards, services } = props
	return (
		<section className={styles.container}>
			<div className={styles.container_top}>
				<h1 className={styles.h1}>{services.Title}</h1>
				<p>{services.Description}</p>
			</div>
			<BechoCardContainer cards={cards} />
			<div className={styles.container_bottom}>
				<h2>{services.Sub_Heading}</h2>
				<Link href='/contact'>
					<a className={styles.button}>{services.Button_Text}</a>
				</Link>
			</div>
		</section>
	)
}

export default BechoMain
