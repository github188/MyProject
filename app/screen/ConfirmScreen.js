import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, StyleProvider, View} from 'native-base';
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { refund } from '../actions/payment';
import { useUmbrella } from '../actions/umbrella';
import CountDown from '../utils/CountDown';
import Dimensions from 'Dimensions';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

//店员确认组件
class ConfirmScreen extends Component {

    handleRefund(){
        this.props.dispatch(useUmbrella());
        console.log('confirmed');
        this.props.navigation.dispatch({type:'Return2Main'});
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if (nextProps.paymentStatus === 'refunded') {
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
                            <Title>确认</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='help' />
                            </Button>
                        </Right>
                    </Header>
                    <View style={{flex:1,justifyContent: 'space-around',alignItems: 'center'}}>
                        <Text> </Text>
                        <Text> </Text>
                        <Text style={{fontSize:24}}>将雨伞交给营业员解锁</Text>
                        <Text> </Text>
                        <Image source={require('../resource/image/unlock.png') } style={{height:windowWidth/2,width:windowWidth}} />
                        <Text> </Text>
                        <View>
                            <CountDown
                                beginText='00:00'
                                endText='请重新扫码'
                                count={900}
                                auto={true}
                                changeWithCount={(count)=> ('0'+Math.floor(count / 60)).substr(-2) + ':'+ ('0'+count % 60).substr(-2)}
                                id='confirmCD'
                                ref={(e)=>{this.countDown=e}}
                                fontSize={24}
                            />
                        </View>
                        <Text> </Text>
                        <Text> </Text>
                        <Button rounded onPress = { () => this.handleRefund()}>
                            <Text>取消</Text>
                        </Button>
                    </View>
                </Container>
            </StyleProvider>
        );
    }
}

function select(store){
    return {
        paymentStatus: store.payment.paymentStatus,
    }
}

export default connect(select)(ConfirmScreen);