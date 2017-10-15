'use strict';

import * as types from './types';
import * as config from '../config/config';

//借伞
export function borrowUmbrella(opt){
    return dispatch => {
        dispatch({type: types.BORROW_UMBRELLA});
        let result = fetch(config.BORROW_UMBRELLA_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                usrname: opt.phoneNumber,
                umbrellaid: opt.umbrellaId,
            })
        }).then((res)=>res.json()).then((resJson) => {
            console.log(resJson);
            if (resJson.ordernumber>0){
                dispatch({type: types.BORROW_UMBRELLA_SUCCESS, orderNumber:resJson.ordernumber,unitPrice:resJson.value,deposit:resJson.deposit,umbrellaId: opt.umbrellaId});
            }
            else{
                dispatch({type: types.BORROW_UMBRELLA_FAILED, error:e});
            }
        }).catch(e =>{
            dispatch({type: types.BORROW_UMBRELLA_FAILED, error:e});
        })
    }
}

//用伞中
export function useUmbrella(){
    return {
        type:types.USING_UMBRELLA
    }
}

//还伞
export function returnUmbrella(){
    return {
        type:types.RETURN_UMBRELLA_SUCCESS
    }
}