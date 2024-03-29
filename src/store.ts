import { Action, ActionCreator, AnyAction, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./store/me/actions";
import { MeState, meReducer } from "./store/me/reducer";
import { ThunkAction } from "redux-thunk";
import { POST_REQUEST, POST_REQUEST_ERROR, POST_REQUEST_SUCCESS, PostRequestAction, PostRequestErorrAction, PostRequestSuccessAction } from "./store/post/actions";
import { PostState, postReducer } from "./store/post/reducer";

export type RootState = {
    commentText: string,
    token: string,
    me: MeState,
    post: PostState,
}
const initialState: RootState = {
    commentText: 'Привет, SkillBox!',
    token: 'undefined',
    me: {
        loading: false,
        erorr: '',
        data: {},
    },
    post: {
        loading: false,
        error: '',
        data: [],
        after: '',
    }
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string;
}
const SET_TOKEN = 'SET_TOKEN';
type SetTokenAction = {
    type: typeof SET_TOKEN;
    token: string;
}
const SAVE_TOKEN = 'SAVE_TOKEN';
type SaveTokenAction = {
    type: typeof SAVE_TOKEN;
    token: string;
}
export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
});

export const setToken: ActionCreator<AnyAction> = (token) => ({
    type: SET_TOKEN,
    token,
});

type MyAction = UpdateCommentAction
    | SetTokenAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction
    | SaveTokenAction
    | PostRequestAction
    | PostRequestSuccessAction
    | PostRequestErorrAction;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action),
            }
        case SAVE_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case POST_REQUEST:
        case POST_REQUEST_SUCCESS:
        case POST_REQUEST_ERROR:
            return {
                ...state,
                post: postReducer(state.post, action),
            }
        default:
            return state;
    }
}

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    dispatch(setToken(window.__token__))
}