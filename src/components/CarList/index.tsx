import React from 'react';
import Paper from '../../reusable/Paper/Paper';
import {CarInterface} from '../../redux/order/models';
import CarItem from './CarItem';

interface CarListProps {
    className: string;
    availableCars: CarInterface[];
}

const CarList = ({ className, availableCars }: CarListProps) => (
    <Paper color='white' className={className}>
        {
            availableCars.map((item: CarInterface) => (
                <CarItem
                    key={item['crew_id']}
                    colour={item['car_color']}
                    distance={item['distance']}
                    name={`${item['car_mark']} ${item['car_model']}`}/>
            ))
        }
    </Paper>
);

export default CarList;