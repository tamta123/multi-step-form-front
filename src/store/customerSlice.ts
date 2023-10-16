import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CustomerState {
  name: string;
  email: string;
  mobile: string;
  plan_choice: string;
  payment_frequency: string;
  online_service: boolean;
  larger_storage: boolean;
  customizable_profile: boolean;
  [key:string]:any;
}

export type KeyofCustomerState = keyof CustomerState;

const initialCustomerState: CustomerState = {
  name: "e.g. Stephen King",
  email: "e.g. stephenking@lorem.com",
  mobile: "e.g. +1 234 567 890",
  plan_choice: "Arcade",
  payment_frequency: "Yearly",
  online_service: false,
  larger_storage: false,
  customizable_profile: false,
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialCustomerState,
  reducers: {

  updateData: (state, action:PayloadAction<{property:string, value:any}>) => {
      const { property, value } = action.payload;
        state[property] = value;
    },

  },
});

export const { updateData } = customerSlice.actions;
export default customerSlice.reducer;

// const property: keyof CustomerState = "name"

//sadac gamovidzaxeb am update funccias unda she
