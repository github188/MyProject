import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, List, ListItem ,StyleProvider, View} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'
import {connect} from 'react-redux';
import {logout} from '../actions/user'
import Dimensions from 'Dimensions';

const windowHeight = Dimensions.get('window').height;

const styles ={
    button_logout:{
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin:20,
        paddingBottom: windowHeight/20
    }
}
//设置
class SettingScreen extends Component {

    //注销
    handleLogout(){
        this.props.dispatch(logout());
        console.log('logout');
        this.props.navigation.dispatch({type:'Logout'});
    }

    render() {
        return (
            <StyleProvider  style={getTheme(mytheme)}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>设置</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='help' />
                            </Button>
                        </Right>
                    </Header>
                    <View style={{flex:1}}>
                        <View style={styles.button_logout}>
                            <Button block onPress = {() => this.handleLogout()}>
                                <Text>注销</Text>
                            </Button>
                        </View>
                    </View>
                </Container>
            </StyleProvider>
        );
    }
}

function select(store){
    return {
        isLogin: store.user.isLogin,
        user: store.user.user,
        status: store.user.status,
        routes: store.nav.routes
    }
}


export default connect(select)(SettingScreen);