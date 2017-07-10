import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, View} from "native-base";
import Camera from 'react-native-camera';
import Dimensions from 'Dimensions';

export default class QRScannerScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
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
                <Content style = {styles.container}>
                    <Camera
                        ref={(cam) => {
                        this.camera = cam;
                        }}
                        style={styles.preview}
                        aspect={Camera.constants.Aspect.fill}
                        barCodeTypes={['qr']}
                        onBarCodeRead={this.readQR.bind(this)}>
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

    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
            then((data) => console.log(data))
          . catch(err => console.error(err));
    }

    readQR(e) {console.log('e',e)}
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