import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title,List, ListItem,StyleProvider,View,Radio} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme';
import { RadioButtons } from 'react-native-radio-buttons';

export default class PaymentScreen extends Component {

    state = {}

    render() {

        const paymentOptions = ['翼支付','电信积分','微信支付','支付宝'];

        function setSelectedOption(checkListOption){
            this.setState({
            checkListOption,
            });
        }

        function renderOption( option, selected, onSelect, index) {
            return (
            <ListItem key={index}>
                <Text>{option}</Text>
                <Right>
                    <Radio selected={selected} onPress={onSelect} key={index}/>
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
                    <Content>
                        <RadioButtons
                            options={ paymentOptions }
                            onSelection={ setSelectedOption.bind(this) }
                            selectedOption={ this.state.checkListOption }
                            renderOption={ renderOption }
                            renderContainer={ renderContainer }
                        />
                        <Text>Selected payment: {this.state.checkListOption || 'none'}</Text>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}