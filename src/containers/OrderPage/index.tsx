import React from 'react';
import {connect} from 'react-redux';
import OrderTaxi from '../../components/OrderTaxi';
import { ThunkDispatch } from 'redux-thunk';
import {getAvailableCarsData} from '../../redux/order/actions';
import {RootState} from '../../redux';
import {OrderState} from '../../redux/order/reducers';
import {RequestCarInterface} from '../../redux/order/models';

const styles = require('./index.module.scss');

interface StateProps {
    orderStore: OrderState;
}

interface DispatchProps {
    getAvailableCarsData: (address: RequestCarInterface) => void;
}

interface OrderPageInterface {
    getAvailableCarsData: (address: RequestCarInterface) => void;
    orderStore: OrderState;
}

const OrderPage: React.FC<OrderPageInterface> = ({ getAvailableCarsData, orderStore }: OrderPageInterface) => {
    return (
        <div color='grey' className={styles['order-page']}>
            <OrderTaxi
                getAvailableCarsData={getAvailableCarsData}
                availableCars={orderStore.availableCars}/>
        </div>
    );
};


const MapStateToProps = (states: RootState): StateProps => {
    return {
        orderStore: states.orderReducer
    };
};

const MapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
    return {
        getAvailableCarsData: (address: RequestCarInterface) => dispatch(getAvailableCarsData(address)),
    };
};

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(OrderPage);

