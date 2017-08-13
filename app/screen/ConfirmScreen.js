import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, StyleProvider, View} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'
import { NavigationActions } from 'react-navigation';
import { connect} from 'react-redux';
import { refund} from '../actions/payment';
import CountDown from '../utils/CountDown';

//店员确认组件
class ConfirmScreen extends Component {

    handleRefund(){
        console.log('Refund');
        this.props.dispatch(refund());
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if (nextProps.status === 'refunded') {
            this.props.navigation.dispatch({type:'Return2Main'})
            return false;
        }
        return true;
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
                            <Title>确认页面</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='help' />
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <Text>将雨伞交给营业员解锁</Text>
                        <View>
                            <CountDown
                                beginText='00:00'
                                endText='请重新扫码'
                                count={300}
                                auto={true}
                                changeWithCount={(count)=> ('0'+Math.floor(count / 60)).substr(-2) + ':'+ ('0'+count % 60).substr(-2)}
                                id='confirmCD'
                                ref={(e)=>{this.countDown=e}}
                            />
                        </View>
                        <Button onPress = { () => this.handleRefund()}>
                            <Text>取消</Text>
                        </Button>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

function select(store){
    return {
        status: store.payment.status,
    }
}

export default connect(select)(ConfirmScreen);