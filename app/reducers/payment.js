'use strict'

import * as types from '../actions/types';

const initialState={
    paymentStatus:null,
    startTime:null,
    payMethod:null,
};

export default function payment(state=initialState,action){
    switch(action.type){
        case types.PAY_DOING:
            return{...state,
                    paymentStatus:'paying'
            };

        case types.PAY_SUCCESS:
            return{...state,
                    payMethod:action.payMethod,
                    paymentStatus:'paid'
            };

        case types.PAY_ERROR:
            return{...state,
                    payMethod:initial,
                    paymentStatus:null
            };

        case types.CONFIRM_DOING:
            return{...state,
                    paymentStatus:'confirming'
            };

        case types.CONFIRM_SUCCESS:
            return{...state,
                    paymentStatus:'confirmed',
                    startTime:'20170808'
            };

        case types.CONFIRM_ERROR:
            return{...state,
            };

        case types.REFUND_DOING:
            return{...state,
                    paymentStatus:'refunding'
            };

        case types.REFUND_SUCCESS:
            return{...state,
                    paymentStatus:null,
                    startTime:null,
            };

        case types.REFUND_ERROR:
            return{...state,
            };

        default:
            return state;
     }
}