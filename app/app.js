import { addNavigationHelpers,StackNavigator } from 'react-navigation';
import React,{Component} from 'react';import { Root } from "native-base";
import { connect } from 'react-redux';

import MainScreen from './screen/MainScreen';
import MenuScreen from './screen/MenuScreen';
import NotificationScreen from './screen/NotificationScreen';
import QRScannerScreen from './screen/QRScannerScreen';
import QRInputScreen from './screen/QRInputScreen';
import LoginScreen from './screen/LoginScreen';
import PaymentScreen from './screen/PaymentScreen';
import WalletScreen from './screen/WalletScreen';
import BorrowHistoryScreen from './screen/BorrowHistoryScreen';
import CouponScreen from './screen/CouponScreen';
import SettingScreen from './screen/SettingScreen';
import AboutScreen from './screen/AboutScreen';
import ShareScreen from './screen/ShareScreen';

export const AppNavigator = StackNavigator({
    Main: { screen: MainScreen },
    Menu: { screen: MenuScreen },
    Notification: { screen: NotificationScreen },
    QRScanner: { screen: QRScannerScreen },
    QRInput: { screen: QRInputScreen },
    Login : { screen:LoginScreen},
    Payment : { screen :PaymentScreen},
    Wallet : { screen:WalletScreen},
    Borrow : { screen :BorrowHistoryScreen},
    Coupon : { screen :CouponScreen},
    Setting : { screen :SettingScreen},
    Share : { screen :ShareScreen},
    About : { screen :AboutScreen},
},{
    initialRouteName:'Main',
    headerMode: 'none'
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <Root>
        <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
    </Root>
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);