import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";

import { convertTime, db } from "./Firebase";

const getExperiences = async () => {
  const response = await getDocs(collection(db, "experiences"));
  return response.docs
    .map((doc) => ({ ...doc.data(), id: doc.id }))
    .sort((a, b) => {
      return b.startDate - a.startDate;
    })
    .map((data) => {
      return {
        ...data,
        startDate: convertTime(data.startDate.toDate()),
        endDate: convertTime(data.endDate.toDate()),
      };
    });
};

export const useExperiences = () => {
  return useQuery({
    queryKey: ["experiences"],
    queryFn: getExperiences,
  });
};
