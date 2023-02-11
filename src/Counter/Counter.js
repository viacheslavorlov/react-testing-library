import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment} from "../store/counterSlice";
import {getCounter} from "./CounterSelector/CounterSelector";

export function Counter() {
    const count = useSelector(getCounter)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    data-testid={'increment-btn'}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <h1 data-testid={'value-title'}>{count}</h1>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}