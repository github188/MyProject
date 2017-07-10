import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Content, Footer, FooterTab, Body, Left, Right, Button, Text, Icon, Title,View,Fab,Card,CardItem } from "native-base";
import MenuScreen from './MenuScreen';
import { MapView, MapTypes, MapModule, Geolocation } from 'react-native-baidu-map';
import Dimensions from 'Dimensions';

const windowHeight = Dimensions.get('window').height;
const initialLongitude = 121.480232
const initialLatitude = 31.236297

const styles ={
    map: {
        flex:1,
        width: Dimensions.get('window').width,
        height: windowHeight
    },
    view_card_bar:{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingTop: windowHeight/40},
    view_button_bar:{
                flexDirection: 'row',
                position: 'absolute',
                left: 0,
                bottom: 0,
                right: 0,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: windowHeight/20}
};

export default class MainScreen extends Component {

    constructor() {
        super();
        this.refreshCurrentPosition();
        this.state = {
            mayType: MapTypes.NORMAL,
            zoom: 18,
            center: {
              longitude: initialLongitude,
              latitude: initialLatitude
            },
             current_address:null,
            marker : {
                latitude: initialLongitude,
                longitude: initialLatitude,
                title:'当前位置',
                icon:'icon_default'},
            markers : []
        };
      }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Menu')}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>共享雨伞</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('Notification')}>
                            <Icon name='notifications' />
                        </Button>
                    </Right>
                </Header>
                    <View style={{ flex: 1 }}>
                        <MapView
                            zoom={this.state.zoom}
                            mapType={this.state.mayType}
                            center={this.state.center}
                            zoomControlsVisible ={false}
                            style={styles.map}
                            marker ={this.state.marker}
                            markers= {this.state.markers}
                        >
                        </MapView>
                        <View style={styles.view_card_bar}>
                            <Card>
                                <CardItem style={{justifyContent: 'space-around',height: windowHeight/15,/*backgroundColor: '#222222'*/}}>
                                    <Icon name='md-pin' color=''/>
                                    <Text>{this.state.current_address}</Text>
                                </CardItem>
                                <CardItem style={{justifyContent: 'space-around',height: windowHeight/15,/*backgroundColor: '#111111'*/}}>
                                    <Text>剩余x把 距离xx米 步行x分钟</Text>
                                </CardItem>
                            </Card>
                        </View>
                        <View style={styles.view_button_bar}>
                            <Button transparent
                                onPress={() => this.refreshCurrentPosition()}>
                                <Icon name='md-locate' />
                            </Button>
                            <Button rounded onPress={() => this.props.navigation.navigate('QRScanner')}>
                                <Text>立即用伞</Text>
                            </Button>
                            <Button transparent>
                                <Icon name='md-umbrella' />
                            </Button>
                        </View>
                    </View>
            </Container>
        );
    }

    refreshCurrentPosition(){
        this.setCurrentPosition();
    }

    setCurrentPosition(){
        Geolocation.getCurrentPosition().then(data => {
                this.setState({
                    center: {
                    latitude: data.latitude,
                    longitude: data.longitude
                    },
                    current_address:data.street+data.streetNumber,
                    marker : {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        title:'当前位置'},
                    markers : this.getUmbrellaLocation(data.latitude,data.longitude)
                });
                }).catch(e =>{
                    console.warn(e, 'error');
            })
    }

    getUmbrellaLocation(currentlatitude,currentlongitude){
           //此处设置当前位置附近的借伞点
        return [{
            latitude: currentlatitude+0.002,
            longitude: currentlongitude+0.002,
            title: '全家1店 剩余3把',
            icon: 'icon_umbrella'},{
            latitude: currentlatitude-0.002,
            longitude: currentlongitude-0.002,
            title: '全家2店 剩余2把',
            icon: 'icon_umbrella'}];
    }
}
