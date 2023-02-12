import {Counter} from "./Counter";
import {Provider} from "react-redux";
import {storeCreator} from "../store/storeCreator";

export default {
	title: 'Counter',
	component: Counter
}
const Template = (args) => {
	return (
		<Provider store={storeCreator(args)}>
			<Counter />
		</Provider>
	)
}
export const StandartCounter = Template.bind({})
StandartCounter.args = {}
//
export const CounterFromHundred = Template.bind({})
CounterFromHundred.args = {counter: {value: 100}}