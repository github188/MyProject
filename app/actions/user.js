'use strict';

import * as types from './types';

//登录
export function login(opt){
    return dispatch => {
        dispatch({type: types.LOGIN_DOING});
        let result = fetch('http://www.baidu.com')
            .then((res)=>{
                dispatch({type: types.LOGIN_SUCCESS, result: true, user:{phoneNumber:opt.phoneNumber,id:1}});
            })
            .catch((e)=>{
                dispatch({type: types.LOGIN_ERROR, result:false, error:e});
            });
    }
}

//注销
export function logout(){
    return {
        type:types.LOGOUT_SUCCESS
    }
}

