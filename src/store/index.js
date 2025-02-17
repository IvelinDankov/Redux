

import { createSlice, configureStore  } from "@reduxjs/toolkit";

const initialState = { counter: 0, toggleCounter: true }

const counterSlice = createSlice({
    name: 'reducers',
    initialState,
    reducers: {
        increase(state) {
            state.counter++
        },
        decrease(state) {
            state.counter--
        },
        toggle(state) {
            state.toggleCounter = !state.toggleCounter
        }
    }
})


const store = configureStore({
    reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions

export default store;