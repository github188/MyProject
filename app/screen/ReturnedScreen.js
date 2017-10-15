import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, List, ListItem, StyleProvider, View} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme';
import * as WeChat from 'react-native-wechat';
import { connect } from 'react-redux';
import Dimensions from 'Dimensions';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const styles ={
    view_share_button_bar:{
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: windowHeight/20
    },
    image_share:{
        height:windowWidth*0.8/5,
        width:windowWidth*0.8/5
    }
};
//分享页面
class ReturnedScreen extends Component {

    constructor(props) {
          super(props);
          //应用注册
          WeChat.registerApp('wx8701248462c14874');
      }

    render() {
        return (
            <StyleProvider  style={getTheme(mytheme)}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.dispatch({type:'Return2Main'})}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>还伞成功</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='help' />
                            </Button>
                        </Right>
                    </Header>
                    <View style={{flex:1,justifyContent: 'space-around',alignItems: 'center'}}>
                        <Image source={require('../resource/image/return_success.png') } style={{height:windowWidth*0.84,width:windowWidth}} />
                        <Text> </Text>
                        <Text style={{fontSize:24}}>将退还 29 元到翼支付账户</Text>
                        <Text> </Text>
                        <Text> </Text>
                        <View style={styles.view_share_button_bar}>
                            <Button transparent large  onPress={ () => this.share2WeiXin()}>
                                <Image source={require('../resource/image/share/wechat.png')} style={styles.image_share}/>
                            </Button>
                            <Button transparent large onPress={ () => this.share2WeiXinTimeline()}>
                                <Image source={require('../resource/image/share/wechat_timeline.png')} style={styles.image_share} />
                            </Button>
                            <Button transparent large>
                                <Image source={require('../resource/image/share/weibo.png')} style={styles.image_share} />
                            </Button>
                            <Button transparent large>
                                <Image source={require('../resource/image/share/qq.png')} style={styles.image_share} />
                            </Button>
                            <Button transparent large>
                                <Image source={require('../resource/image/share/qq_space.png')} style={styles.image_share} />
                            </Button>
                        </View>
                    </View>
                </Container>
            </StyleProvider>
        );
    }

    share2WeiXin(){
        WeChat.isWXAppInstalled().then((isInstalled) => {
            if (isInstalled) {
                WeChat.shareToSession({
                    title:'共享雨伞测试',
                    description: this.props.user.name+'邀请你使用共享雨伞',
                    thumbImage: 'http://www.easyicon.net/api/resizeApi.php?id=1207149&size=72',
                    type: 'news',
                    webpageUrl: 'http://www.baidu.com'
                }).catch((error) => {
                    console.log(error.message);
                });
            }
            else{
                console.log('没有安装微信软件，请您安装微信之后再试');
            }
        });
    }

    share2WeiXinTimeline(){
        WeChat.isWXAppInstalled().then((isInstalled) => {
            if (isInstalled) {
                WeChat.shareToTimeline({
                    title:'共享雨伞测试',
                    description: this.props.user.name+'邀请你使用共享雨伞',
                    thumbImage: 'http://www.easyicon.net/api/resizeApi.php?id=1207149&size=72',
                    type: 'news',
                    webpageUrl: 'http://www.baidu.com'
                }).catch((error) => {
                    console.log(error.message);
                });
            }
            else{
                console.log('没有安装微信软件，请您安装微信之后再试');
            }
        });
    }
}

function select(store){
    return {
        user: store.user.user,
  }
}

export default connect(select)(ReturnedScreen);