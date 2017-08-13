import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, List, ListItem, StyleProvider,Thumbnail ,View } from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme';
import { connect } from 'react-redux';

//菜单组件
class MenuScreen extends Component {

    getPhoneNumberD(phone){
        if (phone)
            {return phone.substring(0,3)+'****'+phone.substring(7);}
        else
            {return '***********';}
    }

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
                            <ListItem onPress={() => this.props.navigation.navigate('Profile')}>
                                <View style={{flex:1,justifyContent: 'space-around',alignItems: 'center'}}>
                                    <Thumbnail large source={require('../resource/image/default_face.png')} />
                                    <Text> </Text>
                                    <Text>{this.getPhoneNumberD(this.props.user.name)}</Text>
                                    <Text>  </Text>
                                    <Button bordered small><Text>电信用户</Text></Button>
                                </View>
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
                                    <Icon name="settings"/>
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

function select(store){
    return {
        user: store.user.user,
  }
}

export default connect(select)(MenuScreen);