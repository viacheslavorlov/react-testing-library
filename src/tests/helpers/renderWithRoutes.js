import {MemoryRouter} from "react-router-dom";
import AppRouter from "../../routes/AppRouter";
import {render} from "@testing-library/react";

export const renderWithRoutes = (component, initialRout = '/') => {
	return render(
		<MemoryRouter initialEntries={[initialRout]}>
			<AppRouter/>
			{component}
		</MemoryRouter>
	)
}