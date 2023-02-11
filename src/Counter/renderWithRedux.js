import {storeCreator} from "../store/storeCreator";

import {Provider} from "react-redux";

export const renderWithRedux = (component, initialState) => {
    const reduxStore = storeCreator(initialState);
    return (
        <Provider store={reduxStore}>
            {component}
        </Provider>
    )
}