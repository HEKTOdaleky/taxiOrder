import React from 'react';
import Paper from '../../../reusable/Paper/Paper';
import Typography from '../../../reusable/Typography';

const styles = require('./index.module.scss');
interface CatItemProps {
    name: string;
    colour: string;
    distance: number;
}
const CarItem = ({ name, colour, distance }: CatItemProps) => (
    <Paper color='grey' className={styles['car-item']}>
        <span className={styles['car-item__img']}/>
        <div className={styles['car-item__section']}>
            <Typography
                fontWeight={500}
                type='Subtitle1'
                color='black'>
                {name}
            </Typography>
            <Typography
                type='Body1'
                color='grey'>
                {colour}
            </Typography>
        </div>
        <div className={styles['car-item__section']}>
            <Typography
                color='black'
                fontWeight={700}
                type='Subtitle1'>{`${distance}m`}</Typography>
        </div>
    </Paper>
);

export default CarItem;