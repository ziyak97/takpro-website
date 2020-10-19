import React from 'react'
import DataManagementLogo from '../../public/data-management.svg'
import EcommerceLogo from '../../public/ecommerce.svg'
import TechnicalSupportLogo from '../../public/technical-support.svg'
import SocialMediaLogo from '../../public/social-media.svg'

import styles from './support-card.module.scss'

const SupportCard = (props) => {
	const { cards } = props
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
				{cards.map((card) => (
					<div key={card.id} className={styles.svg_container}>
						<div className={styles.svg_container_number}>
							<img
								className={styles.svg}
								src={card.Image_Url}
								alt='Service Logo'
							/>
							<h3 className={styles.h3}>{card.Heading}</h3>
							<p>{card.Description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default SupportCard
