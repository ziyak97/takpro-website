import TeamCard from '../team-card/team-card.component'
import ZiyakLogo from '../../public/ziyak.png'
import ThomasLogo from '../../public/thomas.svg'
import MichaelLogo from '../../public/michael.svg'
import NickLogo from '../../public/nick.svg'
import AllanLogo from '../../public/allan.svg'
import KeithLogo from '../../public/keith.svg'

import styles from './team.module.scss'

const Team = (props) => {
	const { teamMembers } = props
	return (
		<section id='team' className={styles.container}>
			<div>
				<div>
					<h3 className={styles.h3}>WE ARE</h3>
					<h2 className={styles.h2}>TaskPro Services Team</h2>
					<p className={styles.p}>Working to help you with your customers.</p>
				</div>
			</div>
			<div className={styles.card_container}>
				{teamMembers.map((teamMember) => (
					<TeamCard
						key={teamMember.Position}
						src={teamMember.Image_Url}
						name={teamMember.Name}
						role={teamMember.Role}
						hobbies={teamMember.Hobbies}
					/>
				))}
			</div>
		</section>
	)
}

export default Team
