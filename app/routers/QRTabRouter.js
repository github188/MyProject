'use strict'

import { addNavigationHelpers,TabNavigator } from 'react-navigation';
import React,{Component} from 'react';
import { connect } from 'react-redux';

import QRScannerScreen from '../screen/QRScannerScreen';
import QRInputScreen from '../screen/QRInputScreen';

const QRTabRouter = TabNavigator({
    QRScanner: { screen: QRScannerScreen,navigationOptions:{tabBarVisible:false}},
    QRInput: { screen: QRInputScreen,navigationOptions:{tabBarVisible:false}},
},{
    initialRouteName:'QRScanner',
    headerMode: 'none',
});

export default QRTabRouter
