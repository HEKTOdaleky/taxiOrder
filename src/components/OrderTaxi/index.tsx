import React from 'react';
import Paper from '../../reusable/Paper/Paper';
import Map from '../Map';
import Button from '../../reusable/Button';
import Typography from '../../reusable/Typography';
import TextField from '../../reusable/TextFileld';

const styles = require('./index.module.scss');

const OrderTaxi = () => (
    <Paper color='white' className={styles['order']}>
        <div className={styles['order__form']}>
            <TextField id='1'/>
        </div>
        <div className={styles['order__details']}>
            <div className={styles['order__map']}>
                <Map
                    onClick={() => {
                    }}
                    places={[]}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAqDFxtJWH9NvWiLnWTNFjVQXlkipcgU6U`}
                    loadingElement={<div className={styles['order__map-element']}/>}
                    containerElement={<div className={styles['order__map-element']}/>}
                    mapElement={<div className={styles['order__map-element']}/>}
                />
            </div>
            <div className={styles['order__taxi-list']}/>
        </div>
        <div className={styles['order__send']}>
            <Button color='orange'>
                <Typography
                    type='Body1'
                    color='white'>Order</Typography>
            </Button>
        </div>
    </Paper>
);

export default OrderTaxi;