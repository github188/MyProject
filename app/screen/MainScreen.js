import React, { Component } from 'react';
import { BackHandler,Platform } from 'react-native';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, View, Card, CardItem ,StyleProvider, Item} from "native-base";
import { MapView, MapTypes} from 'react-native-baidu-map';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { getCurrentLocation, getStoreLocation} from '../actions/location';
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'

const windowHeight = Dimensions.get('window').height;

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
        this.state = {
            mapType: MapTypes.NORMAL,
            zoom: 18,
        };
      }

    shouldComponentUpdate(nextProps, nextState)
        {
            if (nextProps.status === 'located') {
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
                                <Card>
                                    <CardItem style={styles.view_card_bar_item}>
                                        <Text>剩余x把 距离xx米 步行x分钟</Text>
                                    </CardItem>
                                </Card>
                            </View>
                            <View style={styles.view_button_bar}>
                                <Button transparent
                                    onPress={() => this.refreshCurrentPosition()}>
                                    <Icon name='my-location' />
                                </Button>
                                <Button rounded onPress={() => this.redirect2Login('QRScanner')}>
                                    <Icon name='filter-center-focus' />
                                    <Text>立即用伞</Text>
                                </Button>
                                <Button transparent>
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
        status:store.location.status,
  }
}


export default connect(select)(MainScreen);
