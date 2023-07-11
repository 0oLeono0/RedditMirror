import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";


export interface IPostCommentData {
  data: {
    author: string
    id: string
    body: string
    created: number
  }
}

export function useCommentsData(subreddit: string, postID: string) : Array<IPostCommentData> {
  const token = useContext(tokenContext);
  const [commentsData, setCommentsData] = useState([]);
  
  useEffect(() => {
    axios.get(
      `https://oauth.reddit.com/${subreddit}/comments/${postID}.json`, 
      {
        headers: {Authorization: `bearer ${token}`}
      }
    ).then((res) => {
      setCommentsData(res.data[1].data.children);
    }).catch(console.log)
  }, []);
  
  return commentsData;
}