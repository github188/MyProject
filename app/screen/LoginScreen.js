import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Body, Left, Right, Button, Text, Icon, Title,View,Input,Item,Picker } from "native-base";
import Dimensions from 'Dimensions';
import {connect} from 'react-redux';
import {login} from '../actions/user'
import { NavigationActions } from 'react-navigation'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: "+86",
          username: null,
          veriCode: null,
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeVeriCode = this.onChangeVeriCode.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    onValueChange(value: string) {
        this.setState({
          selected: value
        });
    }

    onChangeName(text){
        this.setState({username: text});
    }

    onChangeVeriCode(text){
        this.setState({veriCode: text});
    }

    handleLogin(){
        if(!this.state.username || !this.state.veriCode){
            return;
        }
        let opt = {
            'name': this.state.username,
        };
        this.props.dispatch(login(opt));
        console.log('',)
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>登录</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='help' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
                        <Picker style={{flex:1}}
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Item label="+86" value="+86" />
                        </Picker>
                        <Item regular style={{flex:2}}>
                            <Input placeholder='请输入手机号' onChangeText={this.onChangeName} />
                        </Item>
                    </View>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
                        <Item regular style={{flex:1}}>
                            <Input placeholder='请输入验证码' onChangeText={this.onChangeVeriCode}/>
                        </Item>
                        <Button>
                            <Text>获取验证码</Text>
                        </Button>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        <Button block onPress = {() =>{
                            this.handleLogin();
                            this.props.navigation.dispatch({type:'Login',next:this.props.navigation.state.params.next});
                            }}>
                            <Text>确定</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}


function select(store){
    return {
        isLogin: store.user.isLogin,
        user: store.user.user,
        status: store.user.status,
    }
}


export default connect(select)(LoginScreen);