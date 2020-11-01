import TeamLogo from '../../public/team.svg'
import TestimonialLogo from '../../public/testimonial.svg'
import DataManagementLogo from '../../public/data-management.svg'
import EcommerceLogo from '../../public/ecommerce.svg'
import TechnicalSupportLogo from '../../public/technical-support.svg'
import SocialMediaLogo from '../../public/social-media.svg'
import HonestLogo from '../../public/honest.svg'
import MindLogo from '../../public/mind.svg'
import ResponsibleLogo from '../../public/responsible.svg'
import EmpathyLogo from '../../public/empathy.svg'
import TPSLogo from '../../public/tps.svg'

const Cool = () => {
	return (
		<div className='orbit'>
			<ul className='orbit-wrap'>
				<li
					style={{ display: 'flex', alignItems: 'center' }}
					className='orbit-center'
				>
					<img
						style={{ width: '100%' }}
						src={TPSLogo}
						className='orbit-center__icon fa fa-code'
						alt='TPS logo'
					/>
				</li>

				<li>
					<ul className='ring-2'>
						<li>
							<img
								src={TeamLogo}
								className='orbit-icon fa fa-windows'
								alt='Team'
							/>
						</li>
						<li>
							<img
								src={TestimonialLogo}
								className='orbit-icon fa fa-windows'
								alt='testimonial'
							/>
						</li>
						<li>
							<img
								src={DataManagementLogo}
								className='orbit-icon fa fa-windows'
								alt='Data management'
							/>
						</li>
						<li>
							<img
								src={TeamLogo}
								className='orbit-icon fa fa-windows'
								alt='team'
							/>
						</li>
						<li>
							<img
								src={EcommerceLogo}
								className='orbit-icon fa fa-windows'
								alt='Ecommerce'
							/>
						</li>
						<li>
							<img
								src={TechnicalSupportLogo}
								className='orbit-icon fa fa-windows'
								alt='Technical support'
							/>
						</li>
						<li>
							<img
								src={SocialMediaLogo}
								className='orbit-icon fa fa-windows'
								alt='Social media'
							/>
						</li>
						<li>
							<img
								src={HonestLogo}
								className='orbit-icon fa fa-windows'
								alt='Honest'
							/>
						</li>
					</ul>
				</li>
				<li>
					<ul className='ring-3'>
						<li>
							<img
								src={MindLogo}
								className='orbit-icon fa fa-windows'
								alt='Mind'
							/>
						</li>
						<li>
							<img
								src={ResponsibleLogo}
								className='orbit-icon fa fa-windows'
								alt='Responsible'
							/>
						</li>
						<li>
							<img
								src={EmpathyLogo}
								className='orbit-icon fa fa-windows'
								alt='Empathy'
							/>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	)
}

export default Cool
