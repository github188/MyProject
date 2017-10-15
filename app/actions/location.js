'use strict';

import * as types from './types';
import * as config from '../config/config';
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
function handleWeather(weather){
    return weather.HeWeather5[0].now.cond.code
}

//获取周围商店信息
export function getStoreLocation(opt){
    return dispatch => {
        dispatch({type: types.LOCATING_STORE});
        let result = fetch(config.NEAR_SHOPS_URL, {
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
    return dispatch => {
        dispatch({type:types.GETTING_WEATHER});
        let resultNow=fetch(config.WEATHER_NOW_URL).
            then((res)=>res.json()).
            then((resJson) => {
                dispatch({type: types.GOT_WEATHER, weather: handleWeather(resJson)})
            })
        /*let resultHourly=fetch(weatherHourlyURL).
            then((res)=>res.json()).
            then((resJson) => {
                dispatch({type: types.GOT_WEATHER_HOURLY, weatherHourly: handleWeather(resJson)})
            })*/
    }
}


