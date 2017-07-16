import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, View,Toast} from "native-base";
import Camera from 'react-native-camera';
import Dimensions from 'Dimensions';


class QRScannerMaskView extends Component{
    static defaultProps = {
        maskColor: '#ffffff4C',
        rectHeight: 200,
        rectWidth: 200,
        bottomMenuHeight: 100
    }

    constructor(props){
        super(props);
        this.state ={
            totalLayoutWidth: 360,
            totalLayoutHeight: 480
        };
    }

    getTotalSize(e){
        let totalLayout=e.layout;
        this.setState({
            totalWidth : totalLayout.width,
            totalHeight : totalLayout.height,
        })
        console.log('totalLayoutWidth',this.state.totalWidth);
        console.log('totalLayoutHeight',this.state.totalHeight);
    }

    getSideWidth(){
        return (this.state.totalWidth - this.props.rectWidth)/2
    }

    getTopHeight(){
        return (this.state.totalHeight - this.props.rectHeight)/2
    }

    render() {
        return (
            <View
                onLayout={({nativeEvent: e}) => this.getTotalSize(e)}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    flex : 1
                }}>

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: this.getTopHeight(),
                    width: this.state.totalWidth,
                }}>
                </View>

                <View style={{
                    backgroundColor: '#0000004D',
                    position: 'absolute',
                    top: 0,
                    height: this.getTopHeight(),
                    width: this.state.totalWidth
                }}/>

                <View style={{
                    backgroundColor: '#0000004D',
                    position: 'absolute',
                    left: 0,
                    height: this.props.rectHeight,
                    width: this.getSideWidth()
                }}/>

                <View style={{
                    backgroundColor: '#0000004D',
                    position: 'absolute',
                    right: 0,
                    height: this.props.rectHeight,
                    width: this.getSideWidth()
                }}/>

                <View style={{
                    backgroundColor: '#0000004D',
                    position: 'absolute',
                    bottom: 0,
                    height: this.getTopHeight(),
                    width: this.state.totalWidth,
                }}/>

                <View style={{position: 'absolute', bottom: this.getTopHeight()/2}}>
                    <Text style={{color:'white'}}>对准二维码</Text>
                </View>

            </View>
        );
    }
}


export default class QRScannerScreen extends Component {
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
                        style={styles.preview}
                        aspect={Camera.constants.Aspect.fill}
                        barCodeTypes={['qr']}
                        onBarCodeRead={this.readQR.bind(this)}>
                        <QRScannerMaskView/>
                    </Camera>
                    <View style={{flexDirection: 'row',justifyContent: 'space-around',backgroundColor:'black'}}>
                        <View style={{justifyContent: 'center',alignItems:'center'}}>
                            <Button rounded onPress={() => this.props.navigation.navigate('QRInput')}>
                                <Icon name='md-hand'/>
                            </Button>
                            <Text style={{color:'white'}}>手动输入编号</Text>
                        </View>
                        <View style={{justifyContent: 'center',alignItems:'center'}}>
                            <Button rounded>
                                <Icon name='md-bulb'/>
                            </Button>
                            <Text style={{color:'white'}}>打开手电筒</Text>
                        </View>
                    </View>
                </View>
            </Container>
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

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-150,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }


});