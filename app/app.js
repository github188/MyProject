import { StackNavigator } from 'react-navigation';
import MainScreen from './screen/MainScreen';
import MenuScreen from './screen/MenuScreen';
import NotificationScreen from './screen/NotificationScreen';
import QRScannerScreen from './screen/QRScannerScreen';
import QRInputScreen from './screen/QRInputScreen';
import LoginScreen from './screen/LoginScreen';
import PaymentScreen from './screen/PaymentScreen';

global.ifLogin=false;

const app = StackNavigator({
    Main: { screen: MainScreen },
    Menu: { screen: MenuScreen },
    Notification: { screen: NotificationScreen },
    QRScanner: { screen: QRScannerScreen },
    QRInput: { screen: QRInputScreen },
    Login : { screen:LoginScreen},
    Payment : { screen :PaymentScreen}
},{
    headerMode: 'none'
});

export default app;