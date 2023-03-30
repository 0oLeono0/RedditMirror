import React from "react";
import { useUserData } from "../../hooks/useUserData";

export interface IUserContextData {
    name?: string;
    iconImg?: string;
}

export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
    const [data] = useUserData()
    console.log([data]);

 return (
    <userContext.Provider value={data}>
        {children}
    </userContext.Provider>
 )   
}