import { createData, readData } from "@/database/firebaseDB";
import { database } from "@/lib/firebaseConfig";
import { v4 as uuidv4 } from "uuid";
import { ref, push, serverTimestamp } from "firebase/database";

export type UserPost = {
  userId: string;
  userImg: string;
  postUserRole: string;
  postContent: string;
  postImageUrl?: string;
  postCodeSnippet?: string;
  postFeelings?: string;
}

export const createUserPost = async (userPost: UserPost) => {
  const {userId, userImg,  postUserRole, postContent, postImageUrl, postCodeSnippet, postFeelings} = userPost;

  const postId = uuidv4();

  const postData: any = {
    userId,
    postId,
    userImg,
    postUserRole,
    postContent,
    createdAt: serverTimestamp(),
  }

  try{
    if(postImageUrl) postData.postImageUrl = postImageUrl;
    if(postCodeSnippet) postData.postCodeSnippet = postCodeSnippet;
    if(postFeelings) postData.postFeelings = postFeelings;

    const success = await createData("UserPosts", postData);

    if(success){
      window.location.reload();
    }
    return success;

  } catch (error) {
    throw new Error("Error creating user post: " + error);
  }

}

export const userPosts = async () => {
  try {
    const userPosts = await readData();
    return userPosts;
  } catch (error) {
    throw new Error("Error fetching user posts: " + error);
  }
}