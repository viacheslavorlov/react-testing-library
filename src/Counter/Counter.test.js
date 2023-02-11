import {render} from "@testing-library/react";
import {Counter} from "./Counter";
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import {storeCreator} from "../store/storeCreator";
import {renderWithRedux} from "./renderWithRedux";

describe('Counter test', function () {
    test('Test Counter with null state', async () => {
        const {getByTestId} = render(
            <Provider store={storeCreator()}>
                <Counter/>
            </Provider>)
        const incrementBtn = getByTestId('increment-btn')
        expect(getByTestId('value-title')).toHaveTextContent('0')
        userEvent.click(incrementBtn)
        expect(getByTestId('value-title')).toHaveTextContent('1')
    })
    test('Test Counter with preloaded state', async () => {
        const {getByTestId} = render(renderWithRedux(<Counter/>, {counter: {value: 41}}))
        const incrementBtn = getByTestId('increment-btn')
        expect(getByTestId('value-title')).toHaveTextContent('41')
        userEvent.click(incrementBtn)
        expect(getByTestId('value-title')).toHaveTextContent('42')
    })
});