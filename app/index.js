import React,{Component} from 'react';
import configureStore from './store/index'
import {Provider} from 'react-redux'

import App from './app'

const store = configureStore();

export default class index extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}