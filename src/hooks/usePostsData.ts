import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export function usePostsData() {
  const token = useSelector<RootState, string>(state => state.token);
  const [postData, setPostData] = useState([])

  useEffect(() => {
      if (token !== "" && token !== 'undefined') {
        axios.get(
          "https://oauth.reddit.com/best.json?sr_detail=true", {
            headers: {Authorization: `bearer ${token}`}
          }
        ).then((res) => {
          setPostData(res.data.data.children);
        }).catch(console.log);
      }
    }
      , [token]);

  return postData;
}