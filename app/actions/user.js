'use strict';
import * as types from './types';

let testUser = {
    name: 'Kuma',
    id: 1,
    custId: 1
};

export function login(){
    return dispatch => {
        dispatch({type: types.LOGIN_DOING});
        let result = fetch('http://www.baidu.com')
            .then((res)=>{
                dispatch({type: types.LOGIN_DOING, result: true, user:testUser});
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

