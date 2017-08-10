'use strict'

import * as types from '../actions/types';

const initialState={
    status:null,
    startTime:null,
    payMethod:null,
};

export default function payment(state=initialState,action){
    switch(action.type){
        case types.PAY_DOING:
            return{...state,
                    status:'paying'
            };

        case types.PAY_SUCCESS:
            return{...state,
                    payMethod:action.payMethod,
                    status:'paid'
            };

        case types.PAY_ERROR:
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
                    status:'confirmed',
                    startTime:'20170808'
            };

        case types.CONFIRM_ERROR:
            return{...state,
                    status:null,
                    payMethod:null,
            };

        case types.REFUND_DOING:
            return{...state,
                    status:'refunding'
            };

        case types.REFUND_SUCCESS:
            return{...state,
                    status:'refunded',
                    startTime:null,
            };

        case types.REFUND_ERROR:
            return{...state,
                    status:null,
                    payMethod:null,
            };

        default:
            return state;
     }
}