'use strict'
import * as types from './types';
import { Geolocation } from 'react-native-baidu-map';

const test_store=[{
    latitude: 31.253428,
    longitude: 121.408472,
    title: '全家兰溪店 剩余3把',
    icon: 'icon_umbrella'},{
    latitude: 31.233026,
    longitude: 121.556537,
    title: '全家五道口店 剩余2把',
    icon: 'icon_umbrella'}];

function handleStores(stores){
    let result = new Array();
    console.log('get stores',stores.length)
    for (var i =0;i<stores.length;i++){
        let store = stores[i];
        result[i]={latitude:store.y,longitude:store.x,title:store.shopname+','+store.shopaddress+',剩余'+store.count+'把',icon:'icon_umbrella' }
    }
    return result;
}

export function getStoreLocation(opt){
    console.log('locat store',opt);
    return dispatch => {
        dispatch({type: types.LOCATING_STORE});
        let result = fetch('http://192.168.137.1:9090/phone/nearshops', {
                       method: 'POST',
                       headers: {
                         'Content-Type': 'application/json;charset=utf-8',
                       },
                       body: JSON.stringify({
                           x: opt.longitude,
                           y: opt.latitude,
                           metre: '500'
                       })
                     }).then((res)=>res.json()).then((resJson) => {
                     console.log('response stores',resJson)
        dispatch({type: types.LOCATE_STORE_SUCCESS, stores: handleStores(resJson)});
        }).catch(e =>{
            dispatch({type: types.LOCATE_STORE_ERROR, error:e});
        })
    }
}

export function getCurrentLocation(){
    return dispatch => {
        dispatch({type: types.LOCATING});
        let result=Geolocation.getCurrentPosition().then(data => {
        dispatch({type: types.LOCATE_SUCCESS, center: {
            latitude: data.latitude,
            longitude: data.longitude
            },address:data.street+data.streetNumber});
        }).catch(e =>{
            dispatch({type: types.LOCATE_ERROR, error:e});
        })
    }
}


