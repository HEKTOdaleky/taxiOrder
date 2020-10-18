import React from 'react';
import Paper from '../../reusable/Paper/Paper';
import {CarInterface, CoordsInterface} from '../../redux/order/models';
import CarItem from './CarItem';
import {distanceInKmBetweenEarthCoordinates} from '../../common/utils';

interface CarListProps {
    className: string;
    availableCars: CarInterface[];
    foundAddress?: CoordsInterface;
}

const CarList = ({ className, availableCars, foundAddress }: CarListProps) => (
    <Paper color='white' className={className}>
        {
            availableCars.map((item: CarInterface) => (
                <CarItem
                    key={item['crew_id']}
                    colour={item['car_color']}
                    distance={foundAddress ? distanceInKmBetweenEarthCoordinates(foundAddress, item) : item['distance']}
                    name={`${item['car_mark']} ${item['car_model']}`}/>
            ))
        }
    </Paper>
);

export default CarList;