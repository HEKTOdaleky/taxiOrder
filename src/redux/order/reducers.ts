import {OrderAction, orderActionTypes} from './actionTypes';
import {CarInterface} from './models';

export interface OrderState {
    isGetAvailablePending: boolean;
    isGetAvailableFailure: boolean;
    availableCars: CarInterface[];
}

const initialState: OrderState = {
    isGetAvailablePending: false,
    isGetAvailableFailure: false,
    availableCars: []
};

const orderReducer = (state: OrderState = initialState, action: OrderAction): OrderState => {
    switch (action.type) {
        case orderActionTypes.GET_AVAILABLE_CARS_PENDING:
            return { ...state, availableCars: [], isGetAvailableFailure: false, isGetAvailablePending: true };
        case orderActionTypes.GET_AVAILABLE_CARS_SUCCESS:
            return { ...state, availableCars: action.carsData, isGetAvailableFailure: false, isGetAvailablePending: false };
        case orderActionTypes.GET_AVAILABLE_CARS_FAILURE:
            return { ...state, availableCars: [], isGetAvailableFailure: true, isGetAvailablePending: false };
        default:
            return state;
    }
};

export default  orderReducer;