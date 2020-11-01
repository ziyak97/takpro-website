import styles from './sidebar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = (props) => {
	const router = useRouter()

	const { sidebarOpen, handleSidebar } = props
	return (
		<div
			style={{ display: `${sidebarOpen ? 'block' : 'none'}` }}
			className={styles.mobile_menu}
		>
			<div className={styles.links_container}>
				<div
					className={`${router.pathname === '/' && styles.active}`}
					onClick={handleSidebar}
				>
					<Link href='/' className={styles.links}>
						Home
					</Link>
				</div>
				<div
					className={`${router.pathname === '/about' && styles.active}`}
					onClick={handleSidebar}
				>
					<Link href='/about' className={styles.links}>
						About
					</Link>
				</div>
				<div
					className={`${router.pathname === '/services' && styles.active}`}
					onClick={handleSidebar}
				>
					<Link href='/services' className={styles.links}>
						Services
					</Link>
				</div>
				<div
					className={`${router.pathname === '/contact' && styles.active}`}
					onClick={handleSidebar}
				>
					<Link href='/contact' className={styles.links}>
						Contact
					</Link>
				</div>
			</div>
			<div className={styles.mobile_logo}>TaskPro Services</div>
			<div className={styles.close} onClick={handleSidebar}>
				<div className={styles.bar1}>
					<div className={styles.bar2}></div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
