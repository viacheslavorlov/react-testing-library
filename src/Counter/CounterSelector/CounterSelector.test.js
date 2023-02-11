import {getCounter} from "./CounterSelector";

describe('counter selector testing', function () {
    test('work with empty state', () => {
        expect(getCounter({})).toBe(0)
    });
    test('work with non empty state', () => {
        expect(getCounter({counter:{value: 100}})).toBe(100)
    })
});