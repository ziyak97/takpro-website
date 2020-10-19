import styles from '../styles/Home.module.css'
import SupportCard from '../components/support-card/support-card.component'
import MainSection from '../components/main-section/main-section.component'
import Testimonial from '../components/testimonial/testimonial.component'
import World from '../components/world/world.component'
import Growth from '../components/growth/growth.component'

export default function Home(props) {
	const { testimonials, cards } = props
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<MainSection />
				<SupportCard cards={cards} />
				<Testimonial testimonials={testimonials} />
				<World />
				<Growth />
			</main>
		</div>
	)
}

export async function getStaticProps() {
	const { API_URL } = process.env

	const resTestimonials = await fetch(`${API_URL}/testimonials`)
	let testimonials = await resTestimonials.json()
	testimonials = testimonials.sort((a, b) => a.Position - b.Position)

	const resCards = await fetch(`${API_URL}/services-cards`)
	let cards = await resCards.json()
	cards = cards.sort((a, b) => a.Position - b.Position)

	return {
		props: {
			testimonials,
			cards,
		},
		revalidate: 1,
	}
}
