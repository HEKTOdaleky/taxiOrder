import React, {useState} from 'react';
import Paper from '../../reusable/Paper/Paper';
import Map from '../Map';
import Button from '../../reusable/Button';
import Typography from '../../reusable/Typography';
import {CarInterface, CoordsInterface} from '../../redux/order/models';
import CarList from '../CarList';
import {checkCoords} from '../../common/utils';
import PlacesAutocomplete from '../SecondAutocomlpete';

const styles = require('./index.module.scss');

interface OrderTaxiInterface {
    getAvailableCarsData: () => void;
    availableCars: CarInterface[];
}

const OrderTaxi = ({availableCars}: OrderTaxiInterface) => {
const [foundAddress, setFoundAddress] = useState<CoordsInterface>();
const [foundFormattedAddress, setFormattedAddress] = useState<string>('');


const mapMarkers = [...availableCars.map(item => ({lat: item.lat, lng: item.lng, idx: item['crew_id']}))];
const mapClickHandler = async (coords: CoordsInterface) => {
    if (coords.lng) {
        const result = await checkCoords(coords);
        setFormattedAddress(result);
    }
};
    return (
        <Paper color='white' className={styles['order']}>
            <div className={styles['order__form']}>
                <PlacesAutocomplete
                    customValue={foundFormattedAddress}
                    saveAddress={setFoundAddress}
                    error={''}
                    coords={foundAddress}
                    clearAddressResult={() => {
                    }}/>
            </div>
            <div className={styles['order__details']}>
                <div className={styles['order__map']}>
                    <Map
                        onClick={mapClickHandler}
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