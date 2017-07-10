import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, Form, Item, Label, Input,View} from "native-base";

export default class QRInputScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>输入编号</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='help' />
                        </Button>
                    </Right>
                </Header>
                <Content style={{flex: 1,backgroundColor: '#635DB7'}}>
                    <Form style={{flex: 1,justifyContent: 'space-around'}}>
                        <Item success>
                            <Input placeholder='输入编号'/>
                        </Item>
                        <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-around'}}>
                            <Button rounded>
                                <Icon name='md-checkmark-circle'/>
                            </Button>
                            <Button rounded>
                                <Icon name='md-bulb'/>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}