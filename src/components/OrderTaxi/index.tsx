import React, {useState} from 'react';
import Paper from '../../reusable/Paper/Paper';
import Map from '../Map';
import Button from '../../reusable/Button';
import Typography from '../../reusable/Typography';
import GoogleAutocompleteInput from '../Autocomplete';
import {CarInterface, CoordsInterface} from '../../redux/order/models';
import CarList from '../CarList';

const styles = require('./index.module.scss');

interface OrderTaxiInterface {
    getAvailableCarsData: () => void;
    availableCars: CarInterface[];
}

const OrderTaxi = ({availableCars}: OrderTaxiInterface) => {
const [foundAddress, setFoundAddress] = useState<CoordsInterface>();

const mapMarkers = [...availableCars.map(item => ({lat: item.lat, lng: item.lng, idx: item['crew_id']}))];
    return (
        <Paper color='white' className={styles['order']}>
            <div className={styles['order__form']}>
                <GoogleAutocompleteInput
                    onBlur={() => {
                    }}
                    saveAddress={setFoundAddress}
                    error={''}
                    coords={foundAddress}
                    clearAddressResult={() => {
                    }}/>
            </div>
            <div className={styles['order__details']}>
                <div className={styles['order__map']}>
                    <Map
                        onClick={setFoundAddress}
                        // @ts-ignore
                        places={mapMarkers}
                        foundAddress={foundAddress}
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
                        fontWeight={700}
                        color='white'>
                        Заказать
                    </Typography>
                </Button>
            </div>
        </Paper>
    );
};

export default OrderTaxi;