import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title,List, ListItem,StyleProvider} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'

export default class ProfileScreen extends Component {
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
                            <Title>个人信息</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='help' />
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <List>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Setting')}>
                                <Left>
                                    <Icon name="face"/>
                                </Left>
                                <Body>
                                    <Text>头像</Text>
                                </Body>
                                <Right>
                                    <Text>1.0</Text>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Setting')}>
                                <Left>
                                    <Icon name="account-balance-wallet"/>
                                </Left>
                                <Body>
                                    <Text>昵称</Text>
                                </Body>
                                <Right>
                                    <Text>1.0</Text>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Setting')}>
                                <Left>
                                    <Icon name="view-list"/>
                                </Left>
                                <Body>
                                    <Text>姓名</Text>
                                </Body>
                                <Right>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Setting')}>
                                <Left>
                                    <Icon name="shopping-cart"/>
                                </Left>
                                <Body>
                                    <Text>实名认证</Text>
                                </Body>
                                <Right>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Setting')}>
                                <Left>
                                    <Icon name="message"/>
                                </Left>
                                <Body>
                                    <Text>手机号</Text>
                                </Body>
                                <Right>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Setting')}>
                                <Left>
                                    <Icon name="build"/>
                                </Left>
                                <Body>
                                    <Text>电信用户</Text>
                                </Body>
                                <Right>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}