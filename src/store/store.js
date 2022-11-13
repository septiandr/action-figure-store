import { configureStore, createSlice } from "@reduxjs/toolkit";

const drawer = createSlice({
    name:'drawerCondition',
    initialState:{
        drawer:false
    },
    reducers:{
        update:(state, action) => {
            state.drawer = action.payload.drawer
        }
    }
})

export const store = configureStore({
    reducer:{
        drawerCondition: drawer.reducer
    }
});

export const { update } = drawer.actions


