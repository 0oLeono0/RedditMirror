import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RootState, saveToken} from "../store";
import { useSelector } from "react-redux";

export function useToken() {
    const token = useSelector<RootState>(state => state.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if(window.__token__) {
            dispatch(saveToken() as any)
        }
    }, [])

    return token
}