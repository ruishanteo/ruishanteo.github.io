import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";

import { db } from "./Firebase";

const getTechStack = async () => {
  const response = await getDocs(collection(db, "techStack"));
  return response.docs
    .map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
    .sort((a, b) => a.name > b.name);
};

export const useTechStack = () => {
  return useQuery({
    queryKey: ["techstack"],
    queryFn: getTechStack,
  });
};
