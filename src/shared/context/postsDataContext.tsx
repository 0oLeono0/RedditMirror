import React from "react";
import { postContext } from "./postContext";
import {usePostsData} from "../../hooks/usePostsData";

export function PostDataProvider({ children }: {children: React.ReactNode}) {
    const postData = usePostsData()
    return (
        <postContext.Provider value={postData}>
            {children}
        </postContext.Provider>
    )
}