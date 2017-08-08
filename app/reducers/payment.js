'use strict'

import * as types from '../actions/types';

const initialState={
    startTime:null,
    endTime:null,
    status:null,
    payMethod:null,
};

export default function user(state=initialState,action){
    switch(action.type){
        case types.PREPAY_DOING:
            return{...state,
                    status:'prepaying'
            };

        case types.PREPAY_SUCCESS:
            return{...state,
                    payMethod:action.payMethod,
                    status:'prepayed'
            };

        case types.PREPAY_ERROR:
            return{...state,
                    payMethod:null,
                    status:null
            };

        case types.CONFIRM_DOING:
            return{...state,
                    status:'confirming'
            };

        case types.CONFIRM_SUCCESS:
            return{...state,
                    status:'confirmed'
                    startTime:'20170808'
            };

        case types.CONFIRM_ERROR:
            return{...state,
                    status:null,
                    payMethod:null,
            };

        case types.CONFIRM_DOING:
            return{...state,
                    status:'confirming'
            };

        case types.CONFIRM_SUCCESS:
            return{...state,
                    status:'confirmed'
                    startTime:'20170808'
            };

        case types.CONFIRM_ERROR:
            return{...state,
                    status:null,
                    payMethod:null,
            };

        default:
            return state;
     }
}