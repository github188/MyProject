import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title,List, ListItem,StyleProvider} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'
import {connect} from 'react-redux';
import {logout} from '../actions/user'

class SettingScreen extends Component {

    handleLogout(){
        this.props.dispatch(logout());
        console.log('logout');
        this.props.navigation.dispatch({type:'Logout'});
        //this.props.navigation.goBack(this.props.routes[0].key);
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
                    <Content>
                        <Button block onPress = {() => this.handleLogout()}>
                            <Text>注销</Text>
                        </Button>
                    </Content>
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