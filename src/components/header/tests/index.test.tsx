import Header from "..";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Header", ()=>{

	test("should render component", ()=>{
		render(<MemoryRouter>
				<Header/>
			</MemoryRouter>)
		const logo = screen.getByAltText(/logo/i);
		const linkHome = screen.getByRole("link", {name: "Home"});
	})
})