import React,{Component} from 'react';
import configureStore from './store/index'
import {Provider} from 'react-redux'
import {StyleProvider} from "native-base";
import getTheme from '../native-base-theme/components';
import mytheme from '../native-base-theme/variables/platform';
import App from './app'
import PushNotification from 'react-native-push-notification';

const store = configureStore();

PushNotification.configure({
    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
    },
    popInitialNotification: true,
});
//app入口 环境初始化 绑定redux
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