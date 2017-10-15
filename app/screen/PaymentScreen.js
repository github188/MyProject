import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title,List, ListItem,StyleProvider,View,CheckBox} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme';
import { RadioButtons } from 'react-native-radio-buttons';
import {connect} from 'react-redux';
import {pay} from '../actions/payment'
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
//支付组件
class PaymentScreen extends Component {

    state = {checkListOption:null}

    handlePayment(){
        if (this.state.checkListOption){
            console.log('checkListOption',this.state.checkListOption);
            this.props.navigation.navigate('PayWeb');
            this.props.dispatch(pay(this.state.checkListOption));
        }
        else{
            console.log('checkListOption','please select a method');
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

    render() {

        const paymentOptions = ['翼支付','电信积分','微信支付','支付宝'];

        function setSelectedOption(checkListOption){
            this.setState({
                checkListOption,
            });
        }

        function renderOption( option, selected, onSelect, index) {
            var checkMark;
            if (selected){
                 checkMark = <Icon name="radio-button-checked" />;
            }
            else{
                checkMark = <Icon name="radio-button-unchecked" />;
            }



            return (
            <ListItem onPress={onSelect} key={index}>
                <Text>{option}</Text>
                <Right>
                    {checkMark}
                </Right>
            </ListItem>
          );
        }

        function renderContainer(options){
            return (
                <View>
                    {options}
                </View>
            );
        }

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
                        <View style={{justifyContent: 'space-around',alignItems: 'center',height:windowHeight/3}}>
                            <Text style={{fontSize:24}}>支付押金 30 元</Text>
                            <Text style={{fontSize:18}}>雨伞编号 {this.props.umbrellaId}</Text>
                        </View>
                        <RadioButtons
                            options={ paymentOptions }
                            onSelection={ setSelectedOption.bind(this) }
                            selectedOption={ this.state.checkListOption }
                            renderOption={ renderOption }
                            renderContainer={ renderContainer }
                        />
                        <View style={styles.button_logout}>
                            <Button rounded onPress = { () => this.handlePayment()} >
                                <Text>支付</Text>
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
        paymentStatus: store.payment.paymentStatus,
        useUmbrellaStatus: store.umbrella.useUmbrellaStatus,
        deposit:store.umbrella.deposit,
        unitPrice:store.umbrella.unitPrice,
        umbrellaId:store.umbrella.umbrellaId
    }
}


export default connect(select)(PaymentScreen);