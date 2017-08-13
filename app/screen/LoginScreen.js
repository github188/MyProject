import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, View, Input,Item ,Picker } from "native-base";
import { connect} from 'react-redux';
import { login} from '../actions/user'
import { NavigationActions } from 'react-navigation'

//登录组件
class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "+86",
            username: null,
            veriCode: null,
            commitDisabled:true,
            veriDisabled:true,
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

    //用户名校验 必须是手机
    onChangeName(text){
        this.setState({username: text});
        if (/^\d{11}$/.test(text)){
            this.setState({veriDisabled: false});
        }
        else{
            this.setState({veriDisabled: true});
            this.setState({commitDisabled: true});
        }
    }

    //验证码输入校验
    onChangeVeriCode(text){
        this.setState({veriCode: text});
        if (/^\d{6}$/.test(text) && /^\d{11}$/.test(this.state.username)){
            this.setState({commitDisabled: false});
        }
        else{
            this.setState({commitDisabled: true});
        }
    }

    //登录处理
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

    shouldComponentUpdate(nextProps, nextState)
    {
        // 登录完成，且成功登录
        if (nextProps.status === 'loginDone' && nextProps.isLogin) {
            this.props.navigation.dispatch({type:'Login',next:this.props.navigation.state.params.next});
            return false;
        }
        return true;
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
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',margin:10}}>
                        <Picker style={{flex:1}}
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Item label="+86" value="+86" />
                        </Picker>
                        <Item regular style={{flex:2.5}}>
                            <Input placeholder='请输入手机号' onChangeText={this.onChangeName} />
                        </Item>
                    </View>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',margin:10}}>
                        <Text style={{flex:1}}>验证码</Text>
                        <Item regular style={{flex:1.5}}>
                            <Input placeholder='请输入验证码' onChangeText={this.onChangeVeriCode}/>
                        </Item>
                        <Button disabled = {this.state.veriDisabled}>
                            <Text>获取验证码</Text>
                        </Button>
                    </View>
                    <View style={{justifyContent: 'center',margin:10}}>
                        <Button block disabled = {this.state.commitDisabled}  onPress = {() =>{
                            this.handleLogin();
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