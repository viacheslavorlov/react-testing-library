import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import ToggleComponent from "../toggle-component/ToogleComponent";


describe('test ToggleCompoonent', function () {
	test('renders learn react link', () => {
		render(<ToggleComponent/>);
		const HelloWorld = screen.getByText(/Hello world/i);
		expect(HelloWorld).toBeInTheDocument();
		const inputElement = screen.getByPlaceholderText(/input text/);
		expect(inputElement).toBeInTheDocument();
		const button = screen.getByRole('button')
		expect(button).toBeInTheDocument();
		expect(button).toMatchSnapshot()
		expect(inputElement).toMatchSnapshot()
		screen.debug()

	});

	test('check with query', async () => {
		render(<ToggleComponent/>);
		const helloworldFalse = screen.queryByText(/hello2/i)
		expect(helloworldFalse).toBeNull()
		const data = await screen.findByText(/data/i)
		expect(data).toBeInTheDocument()
		expect(data).toHaveStyle({color: 'blueviolet'})
		screen.debug()
	});
	test('click with toggle &test-id', async () => {
		render(<ToggleComponent/>);
		const btn = screen.getByTestId('toggle-btn')
		const toggle = screen.queryByTestId('toggle-element')
		expect(btn).toBeInTheDocument()
		expect(toggle).toBeNull()
		fireEvent.click(btn)
		const toggleAfterClick = screen.queryByTestId('toggle-element')
		expect(toggleAfterClick).toBeInTheDocument()
		fireEvent.click(btn)
		const toggleAfter2Clicks = screen.queryByTestId('toggle-element')
		expect(toggleAfter2Clicks).toBeNull()
	});

	test('input test', async () => {
		render(<ToggleComponent/>);
		const input = screen.getByPlaceholderText(/input text/i)
		expect(screen.queryByTestId('input-value')).toContainHTML('')
		fireEvent.input(input, {
			target: {
				value: '123123'
			}
		})
		expect(screen.queryByTestId('input-value')).toContainHTML('123123')
		userEvent.type(input, '000')
		expect(screen.queryByTestId('input-value')).toContainHTML('000')
	});
});



