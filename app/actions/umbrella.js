'use strict';

import * as types from './types';

//借伞
export function borrowUmbrella(opt){
    return dispatch => {
        dispatch({type: types.BORROWING_UMBRELLA});
        let result = fetch('http://'+types.HOST_IP+':9090/phone/borrowumbrella', {
                               method: 'POST',
                               headers: {
                                 'Content-Type': 'application/json;charset=utf-8',
                               },
                               body: JSON.stringify({
                                   usrname: opt.name,
                                   umbrellaid: opt.umbrellaId,
                                   x:'121',
                                   y:'31',
                                   shopid:opt.shopid,
                               })
                             }).then((res)=>res.json()).then((resJson) => {
                dispatch({type: types.BORROWED_UMBRELLA, orderNumber:resJson.ordernumber,value:resJson.value,deposit:resJson.deposit});
                }).catch(e =>{
                    dispatch({type: types.LOCATE_STORE_ERROR, error:e});
                })
    }
}

//用伞中
export function useUmbrella(){
    return {
        type:types.USE_UMBRELLA
    }
}

//还伞
export function returnUmbrella(){
    return {
        type:types.USE_UMBRELLA
    }
}