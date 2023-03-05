import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	user: null,
}


export const userSlice = createSlice({
	name: 'userLogin',
	initialState,
	reducers: {},
	
})

export const { reducer } = userSlice