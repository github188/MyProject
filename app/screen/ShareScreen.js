import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, List, ListItem, StyleProvider} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme';
import * as WeChat from 'react-native-wechat';
import { connect } from 'react-redux';

//分享页面
class SearchScreen extends Component {

    constructor(props) {
          super(props);
          //应用注册
          WeChat.registerApp('wx206a7c2058a59ca8');
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
                            <Title>分享</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='help' />
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <List>
                            <ListItem onPress={ () => {
                                WeChat.isWXAppInstalled()
                                    .then((isInstalled) => {
                                        if (isInstalled) {
                                            WeChat.shareToSession({
                                                title:'共享雨伞测试',
                                                description: this.props.user.name+'邀请你使用共享雨伞',
                                                thumbImage: 'http://www.easyicon.net/api/resizeApi.php?id=1207149&size=72',
                                                type: 'news',
                                                webpageUrl: 'http://www.baidu.com'
                                            })
                                                .catch((error) => {
                                                    console.log(error.message);
                                                });
                                        } else {
                                            console.log('没有安装微信软件，请您安装微信之后再试');
                                        }
                                    });
                            }}>
                                <Text>微信</Text>
                            </ListItem>
                            <ListItem onPress={ () => {
                                WeChat.isWXAppInstalled()
                                    .then((isInstalled) => {
                                        if (isInstalled) {
                                            WeChat.shareToTimeline({
                                                title:'共享雨伞测试',
                                                description: this.props.user.name+'邀请你使用共享雨伞',
                                                thumbImage: 'http://www.easyicon.net/api/resizeApi.php?id=1207149&size=72',
                                                type: 'news',
                                                webpageUrl: 'http://www.baidu.com'
                                            })
                                                .catch((error) => {
                                                    console.log(error.message);
                                                });
                                        } else {
                                            console.log('没有安装微信软件，请您安装微信之后再试');
                                        }
                                    });
                            }}>
                                <Text>微信朋友圈</Text>
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

export default connect(select)(SearchScreen);