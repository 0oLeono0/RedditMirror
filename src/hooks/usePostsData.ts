import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { postRequestAsync } from "../store/post/actions";

let count = 0;

export function usePostsData() {
  const data = useSelector<RootState, object>(state => state.post.data);
  const loading = useSelector<RootState, boolean>(state => state.post.loading);
  const error = useSelector<RootState, string>(state => state.post.error);
  const after = useSelector<RootState, string>(state => state.post.after);
  const [ btnFlag, setBtnFlag ] = useState(false);

  const bottomOfList = useRef<HTMLDivElement>(null);

  const token = useSelector<RootState, string>(state => state.token);
  const dispatch = useDispatch()

  function handleLoad(): void {
    dispatch(postRequestAsync(data, after) as any);
    count = 0;
    setBtnFlag(false);
  }

  useEffect(() => {
    if (token == 'undefined') return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (count < 3) {
          dispatch(postRequestAsync(data, after) as any);
          ++count;
        } else {
          setBtnFlag(true);
        }
      }
    }, {
      rootMargin: '20px',
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }
  }, [bottomOfList.current, token, after]);

  return {
    data,
    loading,
    error,
    after,
    bottomOfList,
    btnFlag,
    handleLoad,
  }
}