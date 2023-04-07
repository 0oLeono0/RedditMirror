import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

export function usePostsData() {
  const token = useContext(tokenContext);
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