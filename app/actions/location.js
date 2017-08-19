'use strict';

import * as types from './types';
import { Geolocation } from 'react-native-baidu-map';

//解析附近商店查询返回列表
function handleStores(stores){
    let result = new Array();
    console.log('get stores',stores.length)
    for (var i =0;i<stores.length;i++){
        let store = stores[i];
        result[i]={
            latitude:store.y,
            longitude:store.x,
            title:store.shopname+','+store.shopaddress+','+store.count+'把',
            icon:'icon_umbrella' }
    }
    return result;
}

//解析天气数据
function handleWeatherHourly(weatherNow,weatherHourly){
    let result = new Array();
    console.log('get stores',stores.length);
    for (var i =0;i<stores.length;i++){
        let store = stores[i];
        result[i]={
            latitude:store.y,
            longitude:store.x,
            title:store.shopname+','+store.shopaddress+','+store.count+'把',
            icon:'icon_umbrella' }
    }
    return result;
}

//获取周围商店信息
export function getStoreLocation(opt){
    return dispatch => {
        dispatch({type: types.LOCATING_STORE});
        let result = fetch('http://'+types.HOST_IP+':9090/phone/nearshops', {
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
        dispatch({type: types.LOCATE_STORE_SUCCESS, stores: handleStores(resJson)});
        }).catch(e =>{
            dispatch({type: types.LOCATE_STORE_ERROR, error:e});
        })
    }
}

//获取当前位置信息
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

//获取当前位置当前和每小时天气 当前写死上海
export function getWeather(opt){
    const weatherNowURL = 'https://free-api.heweather.com/v5/now?city=shanghai&key=e6f8e50713c5452c8171d8ee7977fe0d';
    const weatherHourlyURL = 'https://free-api.heweather.com/v5/hourly?city=shanghai&key=e6f8e50713c5452c8171d8ee7977fe0d';
    return dispatch => {
        dispatch({type:types.GETTING_WEATHER});
        let resultNow=fetch(weatherNowURL).
            then((res)=>res.json()).
            then((resJson) => {
                dispatch({type: types.GOT_WEATHER_NOW, weatherHourly: handleWeather(resJson)})
            })
        let resultHourly=fetch(weatherHourlyURL).
            then((res)=>res.json()).
            then((resJson) => {
                dispatch({type: types.GOT_WEATHER_HOURLY, weatherHourly: handleWeather(resJson)})
            })
    }
}


