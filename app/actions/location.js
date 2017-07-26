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

export function getStoreLocation(opt){
    return dispatch => {
        dispatch({type: types.LOCATING_STORE});
        let result = fetch('http://www.baidu.com').then((res) => {
        dispatch({type: types.LOCATE_STORE_SUCCESS, stores: test_store});
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


