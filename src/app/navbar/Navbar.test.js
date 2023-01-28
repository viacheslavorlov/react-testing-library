import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {renderWithRoutes} from "../../tests/helpers/renderWithRoutes";
import Navbar from "./Navbar";

//* тесты для ссыдлок делать отдельно что б понимать какая ссылка сломалась
describe('тесты навигации', () => {
	test('users link', async () => {
		renderWithRoutes(<Navbar/>)
		const usersLink = screen.getByTestId('users-link')

		userEvent.click(usersLink)
		expect(screen.getByTestId('users-page')).toBeInTheDocument()
	})
	test('about link', async () => {
		renderWithRoutes(<Navbar/>)
		const aboutLink = screen.getByTestId('about-link')
		userEvent.click(aboutLink)
		expect(screen.getByTestId('about-page')).toBeInTheDocument()

	})
	test('links', async () => {
		renderWithRoutes(<Navbar/>)
		const mainLink = screen.getByTestId('main-link')
		const aboutLink = screen.getByTestId('about-link')
		userEvent.click(aboutLink)
		expect(screen.getByTestId('about-page')).toBeInTheDocument()
		userEvent.click(mainLink)
		expect(screen.getByTestId('main-page')).toBeInTheDocument()
	})
})
