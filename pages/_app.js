import React from "react";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import reducers from '../reducers';
import {createEpicMiddleware} from 'redux-observable';
import rootEpic from '../epics';


const makeStore = (initialState) => {
    const epicMiddleware = createEpicMiddleware();
    const x =  createStore(reducers, initialState, applyMiddleware(epicMiddleware));
    epicMiddleware.run(rootEpic);
    return x;
};



class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                        <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(makeStore)(MyApp);
