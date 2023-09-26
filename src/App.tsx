import React, { useEffect, useState } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root"
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { UserContextProvider } from "./shared/context/userContext";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store";
import thunk from "redux-thunk";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./shared/NotFound";
import { PostPage } from "./shared/PostPage";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

function AppComponent() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <Provider store={store}>
            <UserContextProvider>
                {mounted && (
                    <BrowserRouter>
                        <Layout>
                            <Header />
                            <Content>
                                <Routes>
                                    <Route path="/posts" element={<CardsList />} />
                                    <Route path="/posts/:id" element={<PostPage />} />
                                    <Route path="/auth" element={<Navigate replace to='/posts' />} />
                                    <Route path="/" element={<Navigate replace to='/posts' />} />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </Content>
                        </Layout>
                    </BrowserRouter>
                )}
            </UserContextProvider>
        </Provider>
    );
}

export const App = hot(() => <AppComponent />);