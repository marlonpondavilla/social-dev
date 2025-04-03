import { createData } from "@/database/firebaseDB";
import { database } from "@/lib/firebaseConfig";
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

  const postData: any = {
    userId,
    userImg,
    postUserRole,
    postContent,
    createdAt: serverTimestamp(),
  }

  try{
    if(postImageUrl) postData.postImageUrl = postImageUrl;
    if(postCodeSnippet) postData.postCodeSnippet = postCodeSnippet;
    if(postFeelings) postData.postFeelings = postFeelings;

    const path = `userPosts/${userId}`;
    const success = await createData(path, postData);

    if(success){
      window.location.reload();
    }
    return success;

  } catch (error) {
    throw new Error("Error creating user post: " + error);
  }

}