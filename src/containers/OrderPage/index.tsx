import React from 'react';
import {connect} from 'react-redux';
import OrderTaxi from '../../components/OrderTaxi';


const styles = require('./index.module.scss');

const OrderPage: React.FC<any> = () => {


    return (
        <div color='grey' className={styles['order-page']}>
            <OrderTaxi/>
        </div>
    );
};


export default connect(
)(OrderPage);
