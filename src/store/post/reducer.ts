import { Reducer } from "react";
import { PostRequestAction, PostRequestSuccessAction, PostRequestErorrAction, POST_REQUEST, POST_REQUEST_ERROR, POST_REQUEST_SUCCESS } from "./actions";

export type PostState = {
    loading: boolean;
    error: string;
    data: {};
    after: string;
}

type PostActions = PostRequestAction
    | PostRequestSuccessAction
    | PostRequestErorrAction;
export const postReducer: Reducer<PostState, PostActions> = (state, action) => {
    switch (action.type) {
        case POST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case POST_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
                after: action.after
            }
        case POST_REQUEST_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            }
        default:
            return state;
    }
}