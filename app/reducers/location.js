'use strict'

import * as types from '../actions/types';

const initialLongitude = 121.480232;
const initialLatitude = 31.236297;
const initialState={
    stores:[],
    center:{
        longitude: initialLongitude,
        latitude: initialLatitude},
    address:null,
    status:null
};

export default function locate(state=initialState,action){
    switch(action.type){
        case types.LOCATING:
            return{...state,
                    status:'locating'
            };

        case types.LOCATE_SUCCESS:
            return{...state,
                    center:action.center,
                    address:action.address,
                    status:'located'
            };

        case types.LOCATE_ERROR:
            return{...state,
                    status:null
            };

        case types.LOCATING_STORE:
            return{...state,
                    status:'locatingStore'
            };

        case types.LOCATE_STORE_SUCCESS:
            return{...state,
                    stores:action.stores,
                    status:null
            };

        case types.LOCATE_STORE_ERROR:
            return{...state,
                    status:null
            };
        default:
            return state;
     }
}