import React, { useState } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root"
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostDataProvider } from "./shared/context/postsDataContext";
import { commentContext } from "./shared/context/commentContext";

function AppComponent() {
    const [commentValue, setCommentValue] = useState('');

    const [token] = useToken();

    const CommentProvider = commentContext.Provider;

    return (
        <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue,
        }}>
            <tokenContext.Provider value={token}>
                <UserContextProvider>
                    <PostDataProvider>
                        <Layout>
                            <Header />
                            <Content>
                                <CardsList />
                            </Content>
                        </Layout>
                    </PostDataProvider>
                </UserContextProvider>
            </tokenContext.Provider>
        </CommentProvider>
    );
}

export const App = hot(() => <AppComponent />);