import { Routes, Route, Navigate } from "react-router-dom"
import { lazy, Suspense } from "react"

const Home = lazy(()=> import("../pages/Home"));
const Lab = lazy(()=> import("../pages/Lab"));

function Routers() {
	return (
		<Suspense fallback="Loading...">
			<Routes>
				<Route path="/"    element={<Navigate to="home"/>}/>
				<Route path="home" element={<Home/>}/>
				<Route path="lab"  element={<Lab/>}/>
			</Routes>
		</Suspense>
	)
}

export default Routers