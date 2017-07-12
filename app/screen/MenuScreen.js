import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, List, ListItem} from "native-base";

export default class MenuScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>个人中心</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='help' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List>
                        <ListItem onPress = {() => this.props.navigation.navigate('Login')}>
                            <Text>登录</Text>
                        </ListItem>
                        <ListItem>
                            <Text>消息</Text>
                        </ListItem>
                        <ListItem>
                            <Text>设置</Text>
                        </ListItem>
                        <ListItem>
                            <Text>关于</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}