import React from 'react';
import {connect} from 'react-redux';
import Typography from '../../reusable/Typography';


const styles = require('./index.module.scss');

const OrderPage: React.FC<any> = () => {


    return (
        <div color='grey' className={styles['order-page']}>
            <Typography>Hello Main Page</Typography>
        </div>
    );
};


export default connect(
)(OrderPage);
