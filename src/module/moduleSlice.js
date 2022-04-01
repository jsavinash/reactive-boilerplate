import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModuleDataLoading: false,
  data: [],
};

export const moduleSlice = createSlice({
  name: "module",
  initialState,
  reducers: {
    fetchModuleData: (state) => {
      state.isModuleDataLoading = true;
    },
    fetchModuleDataSuccess: (state, action) => {
      state.data = action.payload;
      state.isPollutionStatusLoading = false;
    },
    fetchModuleDataFail: (state) => {
      state.isPollutionStatusLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchModuleData,
  fetchModuleDataSuccess,
  fetchModuleDataFail,
} = moduleSlice.actions;

export default moduleSlice.reducer;
