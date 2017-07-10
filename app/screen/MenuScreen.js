import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title} from "native-base";

export default class MenuScreen extends Component {
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
                        <Title>Menu</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='help' />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}