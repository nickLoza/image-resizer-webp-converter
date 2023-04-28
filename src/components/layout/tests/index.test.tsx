import Layout from "..";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Layout", ()=>{

	test("should render header, footer, and main page", async()=>{
		render(<MemoryRouter>
				<Layout/>
			</MemoryRouter>)
		const header = screen.getByRole("banner");
		const footer = screen.getByRole("contentinfo");
		const resizerPage = await screen.findByText(/resizer/i);
	})
})