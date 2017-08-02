'use strict'

import React,{Component} from 'react';
import MainStackRouter from './routers/MainStackRouter';
import { StyleSheet,BackHandler,Platform } from 'react-native';

class App extends Component {

    render(){
        return(
            <MainStackRouter/>
        );
    }
}

export default App;