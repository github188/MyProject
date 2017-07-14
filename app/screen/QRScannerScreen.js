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

    render() {
        return (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                }}>

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 250,
                    width: 250,
                }}>
                </View>

                <View style={{
                    backgroundColor: '#0000004D',
                    position: 'absolute',
                    top: 0,
                    bottom: 350,
                    width: 500,
                }}/>

                <View style={{
                    backgroundColor: '#0000004D',
                    position: 'absolute',
                    left: 0,
                    height: this.props.rectHeight,
                    width: 75,
                }}/>

                <View style={{
                    backgroundColor: '#0000004D',
                    position: 'absolute',
                    right: 0,
                    height: this.props.rectHeight,
                    width: 75,
                }}/>

                <View style={{
                    backgroundColor: '#0000004D',
                    position: 'absolute',
                    bottom: 0,
                    top: 350,
                    width: 500,
                }}/>

                <View style={{position: 'absolute', bottom: 100}}>
                    <Text>对准二维码</Text>
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
                <Content>
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
                    <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                        <Button rounded onPress={() => this.props.navigation.navigate('QRInput')}>
                            <Icon name='md-hand'/>
                        </Button>
                        <Button rounded>
                            <Icon name='md-bulb'/>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }

    readQR(e) {
        //do sth
        if (e.data == '123'){
            Toast.show({
                          text: e.data,
                          position: 'bottom',
                          buttonText: 'OK'
                        })
            console.log('e',e.data);
        }
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