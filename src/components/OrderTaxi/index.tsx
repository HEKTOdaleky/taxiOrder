import React from 'react';
import Paper from '../../reusable/Paper/Paper';
import Map from '../Map';
import Button from '../../reusable/Button';
import Typography from '../../reusable/Typography';
import GoogleAutocompleteInput from '../Autocomplete';
import {CarInterface} from '../../redux/order/models';
import CarList from '../CarList';

const styles = require('./index.module.scss');

interface OrderTaxiInterface {
    getAvailableCarsData: () => void;
    availableCars: CarInterface[];
}

const OrderTaxi = ({availableCars}: OrderTaxiInterface) => (
    <Paper color='white' className={styles['order']}>
        <div className={styles['order__form']}>
            <GoogleAutocompleteInput
                onBlur={() => {}} saveAddress={() => {}}
                error={''}
                coords={{}}
                clearAddressResult={() => {}}/>
        </div>
        <div className={styles['order__details']}>
            <div className={styles['order__map']}>
                <Map
                    onClick={() => {
                    }}
                    places={[]}
                    containerElement={<div className={styles['order__map-element']}/>}
                    mapElement={<div className={styles['order__map-element']}/>}
                />
            </div>
            <CarList
                availableCars={availableCars}
                className={styles['order__taxi-list']}/>
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