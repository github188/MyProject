import React, { Component } from 'react';
import { WebView } from 'react-native';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, List, ListItem ,StyleProvider, View} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'
import {connect} from 'react-redux';
import {logout} from '../actions/user'
import {pay} from '../actions/payment'
import Dimensions from 'Dimensions';
import moment from 'moment';
import EventEmitter from "react-native-md5";
import md5 from "react-native-md5";

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
class PayWeb extends Component {

    constructor(props){
        super(props);
        orderDate=moment().format('YYYYMMDDHHmmss');
        tmp='VERSION=1.0&MERCHANTID=105249&ORDERSEQ=10'+orderDate+'&ORDERREQTRANSEQ='+orderDate+'1024&ORDERDATE='+orderDate+'&ORDERAMOUNT=1&PRODUCTAMOUNT=1&ATTACHAMOUNT=0&CUSTOMERNO='+this.props.user.phoneNumber+'&LOGINNO='+this.props.user.phoneNumber+'&CURTYPE=RMB&ENCODETYPE=1&MERCHANTURL=http://111.231.120.92/front.html&BACKMERCHANTURL=http://111.231.120.92/back.html&BANKCODE=0627&ATTACH=H5&BUSICODE=0001&SUBJECT=sbcz';
        key=md5.hex_md5(tmp+'&KEY=BC10A7D6E584EECD');
        tmp=tmp+'&BUSIDESC=sbcz'+'&MAC='+key
        this.state = {
            body: tmp
        };
      }

    onNavigationStateChange(event){
        console.log(event); //打印出event中属性
        if (event.title.substr(0,14)=='111.231.120.92'){
        //this.props.dispatch(pay('yzf'));
        //this.props.navigation.navigate('Confirm');
        }

    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if (nextProps.paymentStatus === 'paid' & nextProps.useUmbrellaStatus != 'using') {
            console.log('goto confirm')
            this.props.navigation.navigate('Confirm');
            return false;
        }
        return true;
    }
    //pay
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
                            <Title>支付</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='help' />
                            </Button>
                        </Right>
                    </Header>
                    <View style={{flex:1}}>
                        <WebView
                            ref={w => this.webview = w}
                            onNavigationStateChange={this.onNavigationStateChange}
                            source={{uri: 'http://pay1.sh.189.cn:8080/pay_gateway_wap_bestpay/pay.do',method:'POST',
                            body: this.state.body}}
                        />
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

export default connect(select)(PayWeb);