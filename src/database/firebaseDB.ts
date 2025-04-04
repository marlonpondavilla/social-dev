import { database } from "@/lib/firebaseConfig";
import {ref, set, get, update, remove, push, child} from "firebase/database";

export const createData = async (path: string, data: any) => {
  const newDataRef = push(ref(database, path));
  await set(newDataRef, data);
  return newDataRef.key;
}

export const readData = async () => {
  const dbRef = ref(database, "UserPosts");
  const snapshot = await get(dbRef);

  if(snapshot.exists()){
    const data = snapshot.val();

    const userPosts = [];

    for(const userId in data){
      if(data.hasOwnProperty(userId)){

      }
    }

  }
}