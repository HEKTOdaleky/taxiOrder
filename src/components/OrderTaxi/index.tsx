import React, {useEffect, useState} from 'react';
import Paper from '../../reusable/Paper/Paper';
import Map from '../Map';
import Button from '../../reusable/Button';
import Typography from '../../reusable/Typography';
import {
    CarInterface,
    CoordsInterface,
    RequestCarInterface,
    AddressInterface,
    OrderInterface
} from '../../redux/order/models';
import CarList from '../CarList';
import {checkCoords, sortNearestCar} from '../../common/utils';
import PlacesAutocomplete from '../SecondAutocomlpete';
import FoundCar from '../FoundCar';

const styles = require('./index.module.scss');

interface OrderTaxiInterface {
    getAvailableCarsData: (address: RequestCarInterface) => void;
    availableCars: CarInterface[];
    createOrder: (data: OrderInterface) => void;
    createSuccess: boolean;
}

const OrderTaxi = ({availableCars, getAvailableCarsData, createOrder, createSuccess}: OrderTaxiInterface) => {
    const [foundAddress, setFoundAddress] = useState<CoordsInterface>();
    const [foundFormattedAddress, setFormattedAddress] = useState<string>('');
    const [errorSending, setError] = useState<string>('');

    useEffect(() => {
        if (!createSuccess) {
            setFoundAddress(undefined);
            setFormattedAddress('');
        }
    }, [createSuccess]);

    const getCarsHandler = (data: AddressInterface) => {
        if (data) {
            getAvailableCarsData({
                'source_time': new Date().getTime(),
                'addresses': [
                    data
                ]
            });
        }
    };
    const mapMarkers = [...availableCars.map(item => ({lat: item.lat, lng: item.lng, idx: item['crew_id']}))];
    const sortedAvailableCars = foundAddress ? sortNearestCar(foundAddress, availableCars) : availableCars;
    const mapClickHandler = async (coords: CoordsInterface) => {
        setError('');
        if (coords.lng) {
            const address = await checkCoords(coords);
            setFormattedAddress(address);
        }
    };

    const inputChangeHandler = (coords: CoordsInterface, address: string) => {
        setError('');
        setFoundAddress(coords);
        setFormattedAddress(address);
        getCarsHandler({...coords, address});
    };

    const createOrderHandler = () => {
        const car = availableCars[0];

        if (car) {
            createOrder({
                'source_time': new Date().getTime(),
                'addresses': [
                    {
                        lat: 0,
                        lng: 0,
                        address: foundFormattedAddress
                    }
                ],
                crew_id: car.crew_id
            });
        } else {
            setError('Некорректный адрес');
        }
    };

    return (
        <Paper color='white' className={styles['order']}>
            <div className={styles['order__form']}>
                <PlacesAutocomplete
                    customValue={foundFormattedAddress}
                    saveAddress={inputChangeHandler}
                    error={errorSending}
                    coords={foundAddress}
                    clearAddressResult={() => {
                    }}/>
                {availableCars[0] && <FoundCar car={availableCars[0]}/>}
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
                    foundAddress={foundAddress}
                    availableCars={sortedAvailableCars}
                    className={styles['order__taxi-list']}/>
            </div>
            <div className={styles['order__send']}>
                <Button
                    color='orange'
                    onClick={createOrderHandler}
                    disabled={!!errorSending}>
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