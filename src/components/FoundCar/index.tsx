import React from 'react';
import Paper from '../../reusable/Paper/Paper';
import {CarInterface} from '../../redux/order/models';
import Typography from '../../reusable/Typography';

interface FoundInterface {
    car: CarInterface;
}
const FoundCar = ({car}: FoundInterface) => (
    <Paper>
        <Typography
            color='black'
            type='H3'>
            {`${car.car_model} ${car.car_mark}`}
        </Typography>

        <Typography
            color='black'
            type='Subtitle1'>
            {`${car.driver_name} ${car.driver_phone}`}
        </Typography>
        <Typography
            color='grey'
            type='Body2'>
            {`${car.car_number} ${car.car_color}`}
        </Typography>
    </Paper>
);

export default FoundCar;