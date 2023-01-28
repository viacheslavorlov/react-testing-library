import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import App from "./App";
import {MemoryRouter} from "react-router-dom";


describe('test app', function () {
	test('renders learn react link', () => {
		render(
			<MemoryRouter>
				<App/>
			</MemoryRouter>
		);
		const mainLink = screen.getByTestId('main-link')
		const aboutLink = screen.getByTestId('about-link')
		expect(aboutLink).toBeInTheDocument()
		expect(mainLink).toBeInTheDocument()
		userEvent.click(aboutLink)
		expect(screen.getByTestId('about-page')).toBeInTheDocument()
		userEvent.click(mainLink)
		expect(screen.getByTestId('main-page')).toBeInTheDocument()

	});

	test('error page test', () => {
		render(
			<MemoryRouter initialEntries={['/asd']}>
				<App/>
			</MemoryRouter>
		);
		expect(screen.getByTestId('error-page')).toBeInTheDocument()

	});
});



