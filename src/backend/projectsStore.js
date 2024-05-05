import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";

import { convertTime, db } from "./Firebase";

const getProjects = async () => {
  const response = await getDocs(collection(db, "projects"));
  return response.docs
    .map((doc) => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
        techStack: data.techStack.sort((a, b) => a > b),
      };
    })
    .sort((a, b) => a.endDate < b.endDate)
    .map((doc) => ({
      ...doc,
      startDate: convertTime(doc.startDate.toDate()),
      endDate: convertTime(doc.endDate.toDate()),
    }));
};

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
};
