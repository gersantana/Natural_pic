import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
	return (
		<nav className="nav_container">
			{/* <div className="logo_container" >
				<Link to="/">Np</Link>
			</div> */}

			<ul className="links_container">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/favoritos">Favoritos</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
