'use strict'

import React,{Component} from 'react';
import MainStackRouter from './routers/MainStackRouter';
import { StyleSheet,BackHandler,Platform } from 'react-native';

class App extends Component {


    componentWillMount(){
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress',() =>{});
        }
    }

    _onBackAndroid = () => {
        if (this.props.navigation) {
            this.props.navigation.dispatch(NavigationActions.back());
            return true;
        }
        return false;
    }

    render(){
        return(
            <MainStackRouter/>
        );
    }
}

export default App;