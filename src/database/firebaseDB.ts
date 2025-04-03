import { database } from "@/lib/firebaseConfig";
import {ref, set, get, update, remove, push, child} from "firebase/database";

export const createData = async (path: string, data: any) => {
  const newDataRef = push(ref(database, path));
  await set(newDataRef, data);
  return newDataRef.key;
}