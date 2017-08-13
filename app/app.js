'use strict'

import React,{Component} from 'react';
import MainStackRouter from './routers/MainStackRouter';

//容器 装载主导航界面
class App extends Component {

    render(){
        return(
            <MainStackRouter/>
        );
    }
}

export default App;