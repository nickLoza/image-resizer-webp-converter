import Routers from "../../routers/Routers"
import Footer from "../footer"
import Header from "../header"

function Layout() {
	return (
		<>
			<Header/>
				<div className="main">
					<Routers/>
				</div>
			<Footer/>	
		</>
	)
}

export default Layout