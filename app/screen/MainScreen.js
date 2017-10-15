import React, { Component } from 'react';
import { BackHandler, Platform, Image } from 'react-native';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, View, Card, CardItem , StyleProvider, Item, Fab} from "native-base";
import { MapView, MapTypes} from 'react-native-baidu-map';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { getCurrentLocation, getStoreLocation, getWeather} from '../actions/location';
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme';
import {weatherPNG} from '../config/config'
import PushNotification from 'react-native-push-notification';

const windowHeight = Dimensions.get('window').height;

const styles ={
    map: {
        flex:1,
        width: Dimensions.get('window').width,
        height: windowHeight
    },
    view_card_bar:{
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: windowHeight/40
    },
    view_button_bar:{
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: windowHeight/20
    },
    view_card_bar_item:{
        justifyContent: 'space-around',
        height: windowHeight/15,
    }
};

//地图组件
class MainScreen extends Component {

    constructor(props){
        super(props);
        this.props.dispatch(getCurrentLocation());
        this.props.dispatch(getWeather());
        this.state = {
            mapType: MapTypes.NORMAL,
            zoom: 18,
            fabActive: 'true'
        };
      }

    shouldComponentUpdate(nextProps, nextState)
        {
            if (nextProps.locateStatus === 'done') {
                this.props.dispatch(getStoreLocation(nextProps.center));
                return false;
            }
            return true;
        }
    //绑定返回键
    componentWillMount(){
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress',() =>{});
        }
    }

    _onBackAndroid = () => {
        console.log(this.props);
        if (this.props.navigation) {
            if (this.props.routes.length == 1){
                return false;
            }
            this.props.navigation.dispatch(NavigationActions.back());
            return true;
        }
        return false;
    }

    indict(){
        if (!this.props.useUmbrellaStatus){
            return {indict:'扫码用伞',iconName:'filter-center-focus',advertise:'广告栏招租'};
        }
        else{
            return {indict:'归还雨伞',iconName:'assignment-return',advertise:'已用伞 1 天'};
        }
    }

    render() {
        return (
            <StyleProvider  style={getTheme(mytheme)}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.redirect2Login('Menu')}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title alignSelf='center'>共享雨伞</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={() => this.props.navigation.navigate('Search')}>
                                <Icon name='search' />
                            </Button>
                            <Button transparent onPress={() => this.redirect2Login('Notification')}>
                                <Icon name='message' />
                            </Button>
                        </Right>
                    </Header>
                    <View style={{ flex: 1 }}>
                        <MapView
                            zoom={this.state.zoom}
                            mapType={this.state.mapType}
                            center={this.props.center}
                            zoomControlsVisible ={false}
                            style={styles.map}
                            marker ={{
                                latitude: this.props.center.latitude,
                                longitude: this.props.center.longitude,
                                title:'当前位置',
                                icon:'icon_default'}}
                            markers= {this.props.stores}
                        >
                        </MapView>
                        <View style={styles.view_card_bar}>
                            <Button transparent>
                                <Image source={weatherPNG[this.props.weather]} style={{height:30, width:30}} />
                            </Button>
                            <Card>
                                <CardItem style={styles.view_card_bar_item}>
                                    <Text>{this.indict().advertise}</Text>
                                </CardItem>
                            </Card>
                            <Button transparent>
                                <Image source={weatherPNG[999]} style={{height:30, width:30}} />
                            </Button>
                        </View>
                        <View style={styles.view_button_bar}>
                            <Button transparent
                                onPress={() => this.refreshCurrentPosition()}>
                                <Icon name='my-location' />
                            </Button>
                            <Button rounded onPress={() => {
                                if (this.props.useUmbrellaStatus === 'using'){
                                        this.props.navigation.navigate('Refund');}
                                    else{
                                        this.redirect2Login('QRScanner');
                                    }
                                }}>
                                <Icon name={this.indict().iconName} />
                                <Text>{this.indict().indict}</Text>
                            </Button>
                            <Button transparent onPress={() => PushNotification.localNotification({
                                                                   /* Android Only Properties */
                                                                   id: '0', // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
                                                                   ticker: "共享雨伞", // (optional)
                                                                   autoCancel: true, // (optional) default: true
                                                                   largeIcon: "share", // (optional) default: "ic_launcher"
                                                                   smallIcon: "share", // (optional) default: "ic_notification" with fallback for "ic_launcher"
                                                                   bigText: "附近可以还伞", // (optional) default: "message" prop
                                                                   subText: "店名", // (optional) default: none
                                                                   color: "red", // (optional) default: system default
                                                                   vibrate: true, // (optional) default: true
                                                                   vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
                                                                   tag: 'some_tag', // (optional) add tag to message
                                                                   group: "group", // (optional) add group to message
                                                                   ongoing: false, // (optional) set whether this is an "ongoing" notification
                                                                   /* iOS and Android properties */
                                                                   title: "共享雨伞", // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
                                                                   message: "附近可以还伞", // (required)
                                                                   playSound: true, // (optional) default: true
                                                                   soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                                                                   number: '1', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
                                                                   repeatType: 'day', // (Android only) Repeating interval. Could be one of `week`, `day`, `hour`, `minute, `time`. If specified as time, it should be accompanied by one more parameter 'repeatTime` which should the number of milliseconds between each interval
                                                                   actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                                                               })}>
                                <Icon name='help' />
                            </Button>
                        </View>
                    </View>
                </Container>
            </StyleProvider>
        );
    }

    redirect2Login(nextScreen){
        if (this.props.isLogin){
            this.props.navigation.navigate(nextScreen);}
        else{
            this.props.navigation.navigate('Login',{next: nextScreen});
        }
    }

    refreshCurrentPosition(){
        this.props.dispatch(getCurrentLocation());
        //this.props.dispatch(getStoreLocation(this.props.center));
    }

    /*setCurrentPosition(){
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

        getUmbrellaLocation(currentlatitude,currentlongitude,zoom){
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
        }*/
}

function select(store){
    return {
        isLogin: store.user.isLogin,
        center:store.location.center,
        stores:store.location.stores,
        address:store.location.address,
        routes:store.nav.routes,
        locateStatus:store.location.locateStatus,
        weather:store.location.weather,
        useUmbrellaStatus:store.umbrella.useUmbrellaStatus,
  }
}


export default connect(select)(MainScreen);
