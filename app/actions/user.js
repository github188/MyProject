'use strict';
import * as types from './types';

export function login(opt){
    return dispatch => {
        dispatch({type: types.LOGIN_DOING});
        let result = fetch('http://www.baidu.com')
            .then((res)=>{
                dispatch({type: types.LOGIN_SUCCESS, result: true, user:{name:opt.name}});
            })
            .catch((e)=>{
                dispatch({type: types.LOGIN_ERROR, result:false, error:e});
            });
    }
}

export function logout(){
    return {
        type:types.LOGOUT_SUCCESS
    }
}

