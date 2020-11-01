import Image from 'next/image'

import WorldLogo from '../../public/world.webp'

import styles from './world.module.scss'

const World = () => {
	return (
		<section className={styles.container}>
			<div>
				<h3>BETTERING BUSINESSES FOR CLIENTS FROM</h3>
				<h2 className={styles.h2}>15 countries around the world</h2>
				<p>
					We’re an international-ready team. Worked in sync with customers in
					different time-zones.
				</p>
			</div>
			<div className={styles.image_container}>
				<Image
					width={1200}
					height={700}
					className={styles.image}
					src={WorldLogo}
					alt='World'
				/>
			</div>
		</section>
	)
}

export default World
