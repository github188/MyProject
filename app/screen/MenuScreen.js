import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, List, ListItem,Separator} from "native-base";

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
                        <ListItem>
                            <Text>此处放头像</Text>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon iconFamily="Entypo" name="wallet"/>
                            </Left>
                            <Body>
                                <Text>我的钱包</Text>
                            </Body>
                            <Right/>
                        </ListItem>
                        <ListItem icon>
                            <Text>借伞记录</Text>
                        </ListItem>
                        <ListItem icon>
                            <Text>我的优惠</Text>
                        </ListItem>
                        <ListItem icon>
                            <Text>消息</Text>
                        </ListItem>
                        <ListItem icon>
                            <Text>设置</Text>
                        </ListItem>
                        <ListItem icon>
                            <Text>邀请</Text>
                        </ListItem>
                        <ListItem icon>
                            <Text>关于</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}