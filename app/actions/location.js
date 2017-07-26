'use strict'
import * as types from './types';
import { Geolocation } from 'react-native-baidu-map';

export function getStoreLocation(opt){
}

export function getCurrentLocation(){
    return dispatch => {
        dispatch({type: types.LOCATING});
        let result=Geolocation.getCurrentPosition().then(data => {
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
}
