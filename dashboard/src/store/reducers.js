// src/store/reducers.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employeeData: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setEmployeeData: (state, action) => {
      state.employeeData = action.payload;
    },
  },
});

export const { setEmployeeData } = employeeSlice.actions;
export default employeeSlice.reducer;
