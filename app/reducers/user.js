'use strict'

import * as types from '../actions/types';

const initialState={
    isLogin:false,
    user:{},
    status:null,
};

export default function user(state=initialState,action){
    switch(action.type){
        case types.LOGIN_DOING:
            return{...state,
                    status:'doing'
            };

        case types.LOGIN_SUCCESS:
            return{...state,
                    isLogin:true,
                    user:action.user,
                    status:'loginDone'
            };

        case types.LOGIN_ERROR:
            return{...state,
                    isLogin:false,
                    user:{},
                    status:null
            };

        case types.LOGOUT_DOING:
            return{...state,
                    status:'doing'
            };

        case types.LOGOUT_SUCCESS:
            return{...state,
                    isLogin:false,
                    user:{},
                    status:null
            };

        case types.LOGOUT_ERROR:
            return{...state,
                    isLogin:false,
                    user:{},
                    status:null
            };
        default:
            return state;
     }
}