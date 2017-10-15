import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, StyleProvider, View} from 'native-base';
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { refund } from '../actions/payment';
import { useUmbrella,returnUmbrella } from '../actions/umbrella';
import CountDown from '../utils/CountDown';
import Dimensions from 'Dimensions';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
//店员确认组件
class RefundScreen extends Component {

    handleRefund(){
        this.props.dispatch(returnUmbrella());
        console.log('return umbrella');
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if (!nextProps.useUmbrellaStatus) {
            this.props.navigation.navigate('Returned');
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
                            <Title>还伞</Title>
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
                        <Text style={{fontSize:24}}>将雨伞交给营业员检查</Text>
                        <Text> </Text>
                        <Image source={require('../resource/image/return.png') } style={{height:windowWidth/2,width:windowWidth}} />
                        <Text> </Text>
                        <Text style={{fontSize:24}}>预估费用 1 元</Text>
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
        useUmbrellaStatus: store.umbrella.useUmbrellaStatus,
    }
}

export default connect(select)(RefundScreen);