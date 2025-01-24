import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthSliceProps = {
    isAdmin: false,
    userID: null,
    isLoading: false,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        checkAdmin: (state, action) => {
            state.isLoading = true;
            try {
                state.isAdmin = action.payload; 
            } catch (error: any) {
                state.error = error
            } finally {
                state.isLoading = false;
            }
        },
        setUserID: (state, action) => {
            state.isLoading = true;
            try {
                state.userID = action.payload
            } catch (error: any){
                state.error = error
            } finally {
                state.isLoading = false;
            }
        }
    }
});

export const {checkAdmin, setUserID} = authSlice.actions;
export default authSlice.reducer;
