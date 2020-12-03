import React from 'react';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {createOrder, getAvailableCarsData} from '../../redux/order/actions';
import {RootState} from '../../redux';
import {OrderState} from '../../redux/order/reducers';
import {OrderInterface, RequestCarInterface} from '../../redux/order/models';

const styles = require('./index.module.scss');

interface StateProps {
    orderStore: OrderState;
}

interface DispatchProps {
    getAvailableCarsData: (address: RequestCarInterface) => void;
    createOrder: (data: OrderInterface) => void;
}

interface OrderPageInterface {
    getAvailableCarsData: (address: RequestCarInterface) => void;
    createOrder: (data: OrderInterface) => void;
    orderStore: OrderState;
}

const OrderPage: React.FC<OrderPageInterface> = ({getAvailableCarsData, orderStore, createOrder}: OrderPageInterface) => {
    return (
        <>
            <div color='grey' className={styles['order-page']}>
                    <div id='bandpay-widget' style={{ width: '300px', height: '360px', backgroundColor: 'grey' }}/>
            </div>
        </>
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
        createOrder: (data: OrderInterface) => dispatch(createOrder(data))
    };
};

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(OrderPage);

