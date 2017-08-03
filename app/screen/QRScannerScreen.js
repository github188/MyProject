import React, { Component } from 'react';
import { StyleSheet,View ,Animated,ActivityIndicator,Easing} from 'react-native';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title,Toast,StyleProvider} from "native-base";
import { NavigationActions } from 'react-navigation';
import Camera from 'react-native-camera';
import Dimensions from 'Dimensions';
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'

const styles = {
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    view_container:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
    view_scanner:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    view_up_shadow:{
        backgroundColor: '#0000004D',
        position: 'absolute',
        top: 0,
    },
    view_down_shadow:{
        backgroundColor: '#0000004D',
        position: 'absolute',
        bottom: 0,
    },
    view_left_shadow:{
        backgroundColor: '#0000004D',
        position: 'absolute',
        left: 0,
    },
    view_right_shadow:{
        backgroundColor: '#0000004D',
        position: 'absolute',
        right: 0,
    },
    view_hint:{
        position: 'absolute',
    },
    view_button_container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor:'black',
        height:Dimensions.get('window').height/5
    },
    view_button_container_sub:{
        justifyContent: 'space-around',
        alignItems:'center',
    },
    topLeftCorner: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderLeftWidth: 4,
        borderTopWidth: 4
    },
    topRightCorner: {
        top: 0,
        right: 0,
        borderRightWidth: 4,
        borderTopWidth: 4
    },
    bottomLeftCorner: {
        bottom: 0,
        left: 0,
        borderLeftWidth: 4,
        borderBottomWidth: 4
    },
    bottomRightCorner: {
        bottom: 0,
        right: 0,
        borderRightWidth: 4,
        borderBottomWidth: 4
    },
    corner:{
        borderColor:  '#3F51B5',
        height: 20,
        width: 20,
        position: 'absolute',
    },
    scanbar:{
        marginRight: 0,
        marginLeft: 0,
        backgroundColor: '#3F51B5',
        height: 2,
    }
};

class QRScannerMaskView extends Component{
    static defaultProps = {
        maskColor: '#ffffff4C',
        rectHeight: 200,
        rectWidth: 200,
    }

    constructor(props){
        super(props);
        this.state ={
            totalWidth: 0,
            totalHeight: 0,
            animatedValue: new Animated.Value(0),
        };
    }
    //获得照相机区域大小
    getTotalSize(e){
        let totalLayout=e.layout;
        this.setState({
            totalWidth : totalLayout.width,
            totalHeight : totalLayout.height,
        })
    }
    //左右阴影宽度
    getSideWidth(){
        return (this.state.totalWidth - this.props.rectWidth)/2
    }
    //上下阴影高度
    getTopHeight(){
        return (this.state.totalHeight - this.props.rectHeight)/2
    }

    /*renderLoadingIndicator() {
        return (
            <ActivityIndicator
                animating={true}
                color={'#3F51B5'}
                size='large'
            />
        );
    }*/

    render() {
        const animatedStyle = {
            transform: [
                {translateY: this.state.animatedValue}
            ]
        };

        return (
            /*照相机组件*/
            <View
                onLayout={({nativeEvent: e}) => this.getTotalSize(e)}
                style={styles.view_container}>
                {/*扫描区域组件*/}
                <View style={[styles.view_scanner,{
                    height: this.props.rectHeight,
                    width: this.props.rectWidth,
                }]}>
                    {/*扫描线*/}
                    <View style={{height:this.props.rectHeight,width:this.props.rectWidth,}}>
                        <Animated.View
                            style={[animatedStyle,]}>
                            <View style={styles.scanbar}/>
                        </Animated.View>
                    </View>
                    {/*扫描框左上角*/}
                    <View style={[
                        styles.topLeftCorner,
                        styles.corner
                    ]}/>
                    {/*扫描框右上角*/}
                    <View style={[
                        styles.topRightCorner,
                        styles.corner
                    ]}/>

                    {/*this.renderLoadingIndicator()*/}
                    {/*扫描框左下角*/}
                    <View style={[
                        styles.bottomLeftCorner,
                        styles.corner
                    ]}/>
                    {/*扫描框右下角*/}
                    <View style={[
                        styles.bottomRightCorner,
                        styles.corner
                    ]}/>
                </View>
                {/*上阴影*/}
                <View style={[styles.view_up_shadow,{
                    height: this.getTopHeight(),
                    width: this.state.totalWidth
                }]}/>
                {/*下阴影*/}
                <View style={[styles.view_down_shadow,{
                    height: this.getTopHeight(),
                    width: this.state.totalWidth,
                }]}/>
                {/*左阴影*/}
                <View style={[styles.view_left_shadow,{
                    height: this.props.rectHeight,
                    width: this.getSideWidth()
                }]}/>
                {/*右阴影*/}
                <View style={[styles.view_right_shadow,{
                    height: this.props.rectHeight,
                    width: this.getSideWidth()
                }]}/>
                {/*提示语*/}
                <View style={[styles.view_hint,{
                    bottom: this.getTopHeight()/2}]}>
                    <Text style={{color:'white'}}>请对准二维码</Text>
                </View>

            </View>
        );
    }

    componentDidMount() {
        this.scannerLineMove();
    }
    //扫描线动画
    scannerLineMove() {
        this.state.animatedValue.setValue(0);  //重置Rotate动画值为0
        Animated.timing(this.state.animatedValue, {
            toValue: this.props.rectHeight,
            duration: 3500,
            easing: Easing.linear
        }).start(() => this.scannerLineMove());
    }
}


export default class QRScannerScreen extends Component {
    render() {
        return (
            <StyleProvider  style={getTheme(mytheme)}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>扫码取伞</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='help' />
                            </Button>
                        </Right>
                    </Header>
                    <View style={{flex:1}}>
                        <Camera
                            ref={(cam) => {
                            this.camera = cam;
                            }}
                            style={styles.camera}
                            aspect={Camera.constants.Aspect.fill}
                            barCodeTypes={['qr']}
                            onBarCodeRead={this.readQR.bind(this)}>
                            <QRScannerMaskView/>
                        </Camera>
                        <View style={styles.view_button_container}>
                            <View style={styles.view_button_container_sub}>
                                <Button rounded onPress={() => this.props.navigation.navigate('QRInput')}>
                                    <Icon name='power-input'/>
                                </Button>
                                <Text style={{color:'white'}}>手动输入编号</Text>
                            </View>
                            <View style={styles.view_button_container_sub}>
                                <Button rounded>
                                    <Icon name='highlight'/>
                                </Button>
                                <Text style={{color:'white'}}>打开手电筒</Text>
                            </View>
                        </View>
                    </View>
                </Container>
            </StyleProvider>
        );
    }

    readQR(e) {
        //do sth
        Toast.show({
                          text: e.data,
                          position: 'bottom',
                          buttonText: 'OK'
                        })
        console.log('e',e.data);
    }
}

