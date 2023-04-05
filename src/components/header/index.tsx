 import { NavLink } from "react-router-dom"

function Header() {
	return (
		<header className="header" >
			<nav className="header__nav">
				<NavLink 
					className="header__nav-logo" 
					to={"home"}>
					<img 
						className="header__nav-logo-img" 
						src="https://i.postimg.cc/JzrpY7RC/logo-ruler-1.webp" 
						alt="logo"
						width={80}
						height={80}/>
				</NavLink>
				<ul className="header__nav-menu menu">
					<li className="menu__li">
						<NavLink className="menu__link" to={"home"}>
							Home
						</NavLink>
					</li>
					<li className="menu__li">
						<NavLink className="menu__link" to={"lab"}>
							Image lab
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header