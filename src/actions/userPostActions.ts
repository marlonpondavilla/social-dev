import { createData, readData } from "@/database/firebaseDB";
import { database } from "@/lib/firebaseConfig";
import { v4 as uuidv4 } from "uuid";
import { ref, push, serverTimestamp } from "firebase/database";
import { formatPostDate } from "@/lib/dateFormatter";

export type UserPost = {
  userId: string;
  userName: string;
  postId?: string;  
  userImg: string;
  postUserRole: string;
  postContent: string;
  postImageUrl?: string;
  postCodeSnippet?: string;
  postFeelings?: string;
  createdAt?: string;
  postDate?: string;
}

export const createUserPost = async (userPost: UserPost) => {
  const {userId, userName,  userImg,  postUserRole, postContent, postImageUrl, postCodeSnippet, postFeelings} = userPost;

  const date = new Date();
  const postDate = formatPostDate(date);

  const postId = uuidv4();

  const postData: any = {
    userId,
    postId,
    userName,
    userImg,
    postUserRole,
    postContent,
    createdAt: serverTimestamp(),
    postDate: postDate
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

export const fetchUserPosts = async () => {
  try {
    const snapshot = await readData("UserPosts");
    const userPosts: UserPost[] = [];
    if (snapshot) {
      Object.keys(snapshot).forEach((key) => {
        const post = snapshot[key];
        userPosts.push({
          userId: post.userId,
          postId: post.postId,
          userName: post.userName,
          userImg: post.userImg,
          postUserRole: post.postUserRole,
          postContent: post.postContent,
          postImageUrl: post.postImageUrl || "",
          postCodeSnippet: post.postCodeSnippet || "",
          postFeelings: post.postFeelings || "",
          postDate: post.postDate || "",
        });
      });
    } 


    return userPosts;
  } catch (error) {
    throw new Error("Error fetching user posts: " + error);
  }
}
