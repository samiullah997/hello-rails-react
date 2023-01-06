import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GREETINGS = "GREETINGS";

export const showGreetings = createAsyncThunk( GREETINGS, async (args, {dispatch}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  try {
    const {data} = await axios.get("http://localhost:3000/api/greeting", config);
    dispatch({ type: GREETINGS, greetings: data[0] });
    console.log("data");
  } catch (err) {
    console.log(err);
  }
});

const greetingReducer = (state = [], action) => {
    switch (action.type) {
      case GREETINGS:
        return action.greetings
      default:
        return state;
    }
  };
  
  export default greetingReducer;