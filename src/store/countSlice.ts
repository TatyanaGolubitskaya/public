import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type CountState = {
    value: number
    isLoading: boolean
}

const initialState: CountState = {
    value: 0,
    isLoading: false,
}

const countSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, { payload }: PayloadAction<number>) => {
            state.value += payload;
        },
    }, extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending,
                (state) => {
                    console.log("Loading...");
                    state.isLoading = true;
                }
            )
            .addCase(incrementAsync.fulfilled,
                (state, { payload }: any,) => {
                    // state.value += payload;
                    console.log(payload)
                    state.isLoading = false;
                }
            )
            .addCase(incrementAsync.rejected,
                (state, { payload }: any,) => {
                    // state.value += payload;
                    console.log(payload)
                    state.isLoading = false;
                }
            )
    }
})

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        let res = await fetch('https://dummyjson.com/products/1')
        return res.json()
        // return amount;
    }
)

// export const incrementAsync = (payload: number) => (dispatch) => {
//     setTimeout(() => {
//         dispatch(incrementByAmount(payload));
//     }, 1000)
// }

export const { increment, decrement, incrementByAmount } = countSlice.actions

export default countSlice.reducer