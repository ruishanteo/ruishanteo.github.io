import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

import { db } from "./Firebase";

function convertTime(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const day = date.getDate();
  return `${day} ${month} ${year}`;
}

const experiencesSlice = createSlice({
  name: "experiences",
  initialState: {
    experiences: [],
  },
  reducers: {
    saveExperiencesToStore: (state, action) => {
      state.experiences = action.payload;
    },
  },
});

export async function fetchExperiences(dispatch, getState) {
  const response = await getDocs(collection(db, "experiences"));
  const experiences = response.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      id: doc.id,
      startDate: convertTime(data.startDate.toDate()),
      endDate: convertTime(data.endDate.toDate()),
    };
  });
  dispatch(experiencesSlice.actions.saveExperiencesToStore(experiences));
}

export const experiencesReducer = experiencesSlice.reducer;
