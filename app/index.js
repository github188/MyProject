import React,{Component} from 'react';
import configureStore from './store/index'
import {Provider} from 'react-redux'
import { StyleProvider} from "native-base";
import getTheme from '../native-base-theme/components';
import mytheme from '../native-base-theme/variables/platform';

import App from './app'

const store = configureStore();

export default class index extends Component {
    render() {
        return (
            <StyleProvider  style={getTheme(mytheme)}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </StyleProvider>
        );
    }
}