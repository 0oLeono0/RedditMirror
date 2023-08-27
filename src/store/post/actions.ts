import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store";
import axios from "axios";
import { useSelector } from "react-redux";

export const POST_REQUEST = 'POST_REQUEST';
export type PostRequestAction = {
    type: typeof POST_REQUEST;
}

export const postRequest: ActionCreator<PostRequestAction> = () => ({
    type: POST_REQUEST,
});

export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export type PostRequestSuccessAction = {
    type: typeof POST_REQUEST_SUCCESS;
    data: {},
    after: string,
}

export const postRequestSuccess: ActionCreator<PostRequestSuccessAction> = (data: object, after: string) => ({
    type: POST_REQUEST_SUCCESS,
    data,
    after,
});

export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export type PostRequestErorrAction = {
    type: typeof POST_REQUEST_ERROR;
    error: string;
}

export const postRequestErorr: ActionCreator<PostRequestErorrAction> = (error: string) => ({
    type: POST_REQUEST_ERROR,
    error,
});

export const postRequestAsync = (prevChildren: object, nextAfter: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(postRequest());
    axios.get(
        "https://oauth.reddit.com/best.json?sr_detail=true", {
        headers: { Authorization: `bearer ${getState().token}` },
        params: {
            limit: 10,
            after: nextAfter,
        }
    }
    ).then((res) => {
        const children = res.data.data.children
        prevChildren = Object.values(prevChildren).concat(...Object.values(children));
        dispatch(postRequestSuccess(prevChildren, res.data.data.after));
    }).catch((error) => {
        console.log(error);
        dispatch(postRequestErorr(String(error)));
    });
}