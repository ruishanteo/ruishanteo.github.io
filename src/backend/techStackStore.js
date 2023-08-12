import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

import { db } from "./Firebase";

const techStackSlice = createSlice({
  name: "techstack",
  initialState: {
    techStack: [],
  },
  reducers: {
    saveTechStackToStore: (state, action) => {
      state.techStack = action.payload;
    },
  },
});

export async function fetchTechStack(dispatch, getState) {
  const response = await getDocs(collection(db, "techStack"));
  const techStack = response.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  dispatch(techStackSlice.actions.saveTechStackToStore(techStack));
}

export const techStackReducer = techStackSlice.reducer;
