import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
    name: "counter",
    // initial state
    initialState: {
        count: 0
    },
    // method to change data
    reducers: {
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        },
        addToNum (state, action) {
            state.count = action.payload
        }
    }
})

// decompose action: actionCreater
const { increment, decrement, addToNum } = counterStore.actions

// get reducer function
const counterReducer = counterStore.reducer

// export action and reducer
export { increment, decrement, addToNum }
export default counterReducer