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

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
  },
  reducers: {
    saveProjectsToStore: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export async function fetchProjects(dispatch, getState) {
  const response = await getDocs(collection(db, "projects"));

  const projects = response.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      id: doc.id,
      techStack: data.techStack.sort((a, b) => a > b),
      startDate: convertTime(data.startDate.toDate()),
      endDate: convertTime(data.endDate.toDate()),
    };
  });
  dispatch(projectsSlice.actions.saveProjectsToStore(projects));
}

export const projectsReducer = projectsSlice.reducer;
