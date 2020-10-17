import React from 'react';
import {connect} from 'react-redux';
import OrderTaxi from '../../components/OrderTaxi';
import { ThunkDispatch } from 'redux-thunk';
import {getAvailableCarsData} from '../../redux/order/actions';
import {RootState} from '../../redux';
import {OrderState} from '../../redux/order/reducers';

const styles = require('./index.module.scss');

interface StateProps {
    orderStore: OrderState;
}

interface DispatchProps {
    getAvailableCarsData: () => void;
}

interface OrderPageInterface {
    getAvailableCarsData: () => void;
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
        getAvailableCarsData: () => dispatch(getAvailableCarsData()),
    };
};

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(OrderPage);

