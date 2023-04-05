import { Link } from "react-router-dom"

function Home() {
	return (
		<div className="home">
			<h1 className="home__h1">WELCOME</h1>
			<h2 className="home__h2">TO IMAGE OPTIMIZER</h2>
			<p className="home__p">
				Resize and convert images to WEBP
			</p>
			<Link className="home__btn" to={"/lab"} role="button">
				OPEN IMAGE LAB
			</Link>
		</div>
	)
}

export default Home