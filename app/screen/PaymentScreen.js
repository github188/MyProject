import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title,List, ListItem,StyleProvider,Radio} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'

export default class PaymentScreen extends Component {
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
                    <Content>
                        <ListItem>
                        <Text>翼支付</Text>
                        <Right>
                            <Radio selected={true} />
                        </Right>
                        </ListItem>
                        <ListItem>
                        <Text>电信积分</Text>
                        <Right>
                            <Radio selected={true} />
                        </Right>
                        </ListItem>
                        <ListItem>
                        <Text>微信支付</Text>
                        <Right>
                            <Radio selected={false} />
                        </Right>
                        </ListItem>
                        <ListItem>
                        <Text>支付宝</Text>
                        <Right>
                            <Radio selected={false} />
                        </Right>
                        </ListItem>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}