import Footer from "..";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Footer", ()=>{

	test("should render the 11 links", ()=>{
		render(<MemoryRouter>
				<Footer/>
			</MemoryRouter>)
		const links = screen.getAllByRole("link");
		expect(links.length).toBe(11);
	})
})