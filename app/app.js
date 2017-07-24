import { StackNavigator } from 'react-navigation';
import React,{Component} from 'react';
import { Root } from "native-base";
import MainScreen from './screen/MainScreen';
import MenuScreen from './screen/MenuScreen';
import NotificationScreen from './screen/NotificationScreen';
import QRScannerScreen from './screen/QRScannerScreen';
import QRInputScreen from './screen/QRInputScreen';
import LoginScreen from './screen/LoginScreen';
import PaymentScreen from './screen/PaymentScreen';

const Nav = StackNavigator({
    Main: { screen: MainScreen },
    Menu: { screen: MenuScreen },
    Notification: { screen: NotificationScreen },
    QRScanner: { screen: QRScannerScreen },
    QRInput: { screen: QRInputScreen },
    Login : { screen:LoginScreen},
    Payment : { screen :PaymentScreen}
},{
    initialRouteName:'Main',
    headerMode: 'none'
});

export default class App extends Component {
    render() {
        return (
            <Root>
                <Nav/>
            </Root>
        );
    }
}