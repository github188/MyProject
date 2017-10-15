'use strict'

import * as types from '../actions/types';

const initialState={
    umbrellaId:0,
    shopId:0,
    unitPrice:0,
    count:1,
    totalFee:0,
    deposit:0,
    discount:0,
    orderNumber:0,
    useUmbrellaStatus:null
};

export default function umbrella(state=initialState,action){
    switch(action.type){
        case types.BORROW_UMBRELLA:
            return{...state,
                    useUmbrellaStatus:'borrow',
            };

        case types.BORROW_UMBRELLA_SUCCESS:
            return{...state,
                    useUmbrellaStatus:'borrowSuccess',
                    umbrellaId:action.umbrellaId,
                    unitPrice:action.unitPrice,
                    deposit:action.deposit,
                    orderNumber:action.orderNumber,
            };

        case types.USING_UMBRELLA:
            return{...state,
                    useUmbrellaStatus:'using',
            };

        case types.RETURN_UMBRELLA:
            return{...state,
                    useUmbrellaStatus:'returning'
            };

        case types.RETURN_UMBRELLA_SUCCESS:
            return{...state,
                    useUmbrellaStatus:null,
                    umbrellaId:0,
                    unitPrice:0,
                    deposit:0,
                    orderNumber:0,
            };
        default:
            return state;
     }
}