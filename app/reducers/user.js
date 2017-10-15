'use strict'

import * as types from '../actions/types';

const initialState={
    isLogin:false,
    user:{},
    userStatus:null,
};

export default function user(state=initialState,action){
    switch(action.type){
        case types.LOGIN_DOING:
            return{...state,
                    userStatus:'login'
            };

        case types.LOGIN_SUCCESS:
            return{...state,
                    isLogin:true,
                    user:action.user,
                    userStatus:'loginDone'
            };

        case types.LOGIN_ERROR:
            return{...state,
                    isLogin:false,
                    user:{},
                    userStatus:null
            };

        case types.LOGOUT_DOING:
            return{...state,
                    userStatus:'logout'
            };

        case types.LOGOUT_SUCCESS:
            return{...state,
                    isLogin:false,
                    user:{},
                    userStatus:null
            };

        case types.LOGOUT_ERROR:
            return{...state,
                    isLogin:false,
                    user:{},
                    userStatus:null
            };
        default:
            return state;
     }
}