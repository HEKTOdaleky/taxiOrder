import React from 'react';
import {connect} from 'react-redux';
import OrderTaxi from '../../components/OrderTaxi';
import {ThunkDispatch} from 'redux-thunk';
import {createOrder, getAvailableCarsData} from '../../redux/order/actions';
import {RootState} from '../../redux';
import {OrderState} from '../../redux/order/reducers';
import {OrderInterface, RequestCarInterface} from '../../redux/order/models';
import Loader from '../../reusable/Loader';

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
            {(orderStore.orderCarPending || orderStore.isGetAvailablePending) && <Loader/>}
            <div color='grey' className={styles['order-page']}>
                <OrderTaxi
                    createPending={orderStore.orderCarPending}
                    createFailure={orderStore.orderCarFailure}
                    availableCarPending={orderStore.isGetAvailablePending}
                    createOrder={createOrder}
                    getAvailableCarsData={getAvailableCarsData}
                    availableCars={orderStore.availableCars}/>
                    <div id='widget__container' style={{ width: '100px', height: '100px', backgroundColor: 'grey' }}/>
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

