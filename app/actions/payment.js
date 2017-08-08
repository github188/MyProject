'use strict';
import * as types from './types';

export function pay(opt){
    return dispatch => {
        dispatch({type: types.PAY_DOING});
        let result = fetch('http://www.baidu.com')
            .then((res)=>{
                dispatch({type: types.PAY_SUCCESS, result: true, payMethod:opt.payMethod);
            })
            .catch((e)=>{
                dispatch({type: types.PAY_ERROR, result:false, error:e});
            });
    }
}

export function confirm(){
    return dispatch => {
        dispatch({type: types.CONFIRM_DOING});
        let result = fetch('http://www.baidu.com')
            .then((res)=>{
                dispatch({type: types.CONFIRM_SUCCESS, result: true);
            })
            .catch((e)=>{
                dispatch({type: types.CONFIRM_ERROR, result:false, error:e});
            });
    }
}

export function refund(){
    return dispatch => {
        dispatch({type: types.PREPAY_DOING});
        let result = fetch('http://www.baidu.com')
            .then((res)=>{
                dispatch({type: types.PREPAY_SUCCESS, result: true, payMethod:opt.payMethod);
            })
            .catch((e)=>{
                dispatch({type: types.PREPAY_ERROR, result:false, error:e});
            });
    }
}

