import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";


export interface IPostCommentData {
  data: {
    author: string
    id: string
    body: string
    created: number
  }
}

export function useCommentsData(postID: string): Array<IPostCommentData> {
  console.log(postID);
  const token = useSelector<RootState, string>(state => state.token);

  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    axios.get(
      `https://oauth.reddit.com/comments/${postID}`,
      {
        headers: { Authorization: `bearer ${token}` }
      }
    ).then((res) => {
      setCommentsData(res.data[1].data.children);
    }).catch(console.log)
  }, []);

  return commentsData;
}