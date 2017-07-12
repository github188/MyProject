import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title,List, ListItem} from "native-base";

export default class NotificationScreen extends Component {
    render() {
        let items = ['Message1','Message2','Message3']
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>我的消息</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='help' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                <List dataArray={items} renderRow={(item) =>
                    <ListItem>
                    <Text>{item}</Text>
                    </ListItem>
                }>
                </List>
                </Content>
            </Container>
        );
    }
}