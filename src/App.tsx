import React from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root"
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { UserContextProvider } from "./shared/context/userContext";
import { PostDataProvider } from "./shared/context/postsDataContext";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

function AppComponent() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export const App = hot(() => <AppComponent />);