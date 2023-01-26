import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';


describe('test app', function () {
	test('renders learn react link', () => {
		render(<App/>);
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

	test('render with query', async () => {
		render(<App/>);
		const helloworldFalse = screen.queryByText(/hello2/i)
		expect(helloworldFalse).toBeNull()
		const data = await screen.findByText(/data/i)
		expect(data).toBeInTheDocument()
		expect(data).toHaveStyle({color: 'blueviolet'})
		screen.debug()
	});
	test('render with toggle &test-id', async () => {
		render(<App/>);
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
});



