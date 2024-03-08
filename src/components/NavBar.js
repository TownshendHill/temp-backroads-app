import { pageLinks, socialLinks } from '../data';
import logo from '../images/logo.svg';

function NavBar() {
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<div className='nav-header'>
					<img
						src={logo}
						className='nav-logo'
						alt='backroads'
					/>
					<button
						type='button'
						className='nav-toggle'
						id='nav-toggle'>
						<i className='fas fa-bars'></i>
					</button>
				</div>

				<ul
					className='nav-links'
					id='nav-links'>
					{pageLinks.map((page) => (
						<li key={page.id}>
							<a
								href={page.href}
								className='nav-link'>
								{page.text}
							</a>
						</li>
					))}
				</ul>

				<ul className='nav-icons'>
					{socialLinks.map((link) => {
						const { id, href, icon } = link;
						return (
							<li key={id}>
								<a
									href={href}
									target='_blank'
									className='nav-icon'
									rel='noreferrer'>
									<i className={icon}></i>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
