import {render, screen} from "@testing-library/react";
import Users from "./Users";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import {renderWithRoutes} from "../tests/helpers/renderWithRoutes";
import AppRouter from "../routes/AppRouter";

jest.mock('axios')


describe('USERS test fetching', () => {
	let response =
		{
			data: [
				{
					"id": 1,
					"name": "Leanne Graham",
				},
				{
					"id": 2,
					"name": "Ervin Howell",
				},
				{
					"id": 3,
					"name": "Clementine Bauch",
				},
				{
					"id": 4,
					"name": "Patricia Lebsack",

				},
				{
					"id": 5,
					"name": "Chelsey Dietrich",

				},
				{
					"id": 6,
					"name": "Mrs. Dennis Schulist",

				},
				{
					"id": 7,
					"name": "Kurtis Weissnat",

				},
				{
					"id": 8,
					"name": "Nicholas Runolfsdottir V",

				},
				{
					"id": 9,
					"name": "Glenna Reichert",

				},
				{
					"id": 10,
					"name": "Clementina DuBuque",

				}
			]
		}
	afterEach(() => {
		jest.clearAllMocks()
	})

	test('массив значений с сервера', async () => {
		axios.get.mockReturnValue(response)
		render(// компонент для корректной работы роутера
			<MemoryRouter>
				<AppRouter/>
				<Users/>
			</MemoryRouter>
		)
		const users = await screen.findAllByTestId('user-item')
		expect(users.length).toBe(10)
		expect(axios.get).toBeCalledTimes(1)
		// eslint-disable-next-line testing-library/no-debugging-utils
		// screen.debug()
	})


	test('тест страницы одного пользователя', async () => {
		axios.get.mockReturnValue(response)
		renderWithRoutes(null, '/users') // компонент для корректной работы роутера
		const users = await screen.findAllByTestId('user-item')
		expect(users.length).toBe(10)
		userEvent.click(users[0])

		expect(screen.getByTestId("single-user-item")).toBeInTheDocument()
		// eslint-disable-next-line testing-library/no-debugging-utils
		// screen.debug()
	})

})