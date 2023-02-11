import {combineReducers, configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

const rootReducer = combineReducers({
    counter: counterSlice,
})

export const storeCreator = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
}