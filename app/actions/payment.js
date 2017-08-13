'use strict';

import * as types from './types';

//支付
export function pay(opt){
    return dispatch => {
        dispatch({type: types.PAY_DOING});
        let result = fetch('http://www.baidu.com')
            .then((res)=>{
                dispatch({type: types.PAY_SUCCESS, result: true, payMethod:opt});
                })
            .catch((e)=>{
                dispatch({type: types.PAY_ERROR, result:false, error:e});
            });
            }
}

//店员确认
export function confirm(){
    return dispatch => {
        dispatch({type: types.CONFIRM_DOING});
        let result = fetch('http://www.baidu.com')
            .then((res)=>{
                dispatch({type: types.CONFIRM_SUCCESS, result: true});
            })
            .catch((e)=>{
                dispatch({type: types.CONFIRM_ERROR, result:false, error:e});
            });
    }
}

//退还
export function refund(){
    return dispatch => {
        dispatch({type: types.REFUND_DOING});
        let result = fetch('http://www.baidu.com')
            .then((res)=>{
                dispatch({type: types.REFUND_SUCCESS, result: true});
            })
            .catch((e)=>{
                dispatch({type: types.REFUND_ERROR, result:false, error:e});
            });
    }
}

