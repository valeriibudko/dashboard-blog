import {createSlice} from '@reduxjs/toolkit';

const initialState = createSlice({
    name: 'user',
    currentUser: null,
    error: null,
    loading: false
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailer: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const { signInStart, signInSuccess, signInFailer } = userSlice.actions;

export default userSlice.reducer;