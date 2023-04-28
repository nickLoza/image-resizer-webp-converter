import { Routes, Route, Navigate } from "react-router-dom"
import { lazy, Suspense } from "react"

const ResizePage = lazy(()=> import("../pages/ResizePage"))

function Routers() {
	return (
		<Suspense fallback="Loading...">
			<Routes>
				<Route path="/"    element={<Navigate to="home"/>}/>
				<Route path="home"  element={<ResizePage/>}/>
			</Routes>
		</Suspense>
	)
}

export default Routers