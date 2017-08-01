import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, List, ListItem,Separator,StyleProvider} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'

export default class MenuScreen extends Component {
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
                            <ListItem icon onPress={() => this.props.navigation.navigate('Wallet')}>
                                <Left>
                                    <Icon name="account-balance-wallet"/>
                                </Left>
                                <Body>
                                    <Text>我的钱包</Text>
                                </Body>
                                <Right>
                                    <Text>1.0</Text>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Borrow')}>
                                <Left>
                                    <Icon name="view-list"/>
                                </Left>
                                <Body>
                                    <Text>借伞记录</Text>
                                </Body>
                                <Right>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Coupon')}>
                                <Left>
                                    <Icon name="shopping-cart"/>
                                </Left>
                                <Body>
                                    <Text>我的优惠</Text>
                                </Body>
                                <Right>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Notification')}>
                                <Left>
                                    <Icon name="message"/>
                                </Left>
                                <Body>
                                    <Text>消息</Text>
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
                                    <Text>设置</Text>
                                </Body>
                                <Right>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Share')}>
                                <Left>
                                    <Icon name="person-add"/>
                                </Left>
                                <Body>
                                    <Text>邀请</Text>
                                </Body>
                                <Right>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('About')}>
                                <Left>
                                    <Icon name="beach-access"/>
                                </Left>
                                <Body>
                                    <Text>关于</Text>
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