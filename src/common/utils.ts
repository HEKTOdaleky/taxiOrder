import axios from 'axios';
import {CarInterface, CoordsInterface} from '../redux/order/models';
import moment from 'moment';

export const joinStyles = (...args: string[] | undefined[]) => args.join(' ').trim().replace(/[ \t]{2,}/g, ' ');

export const checkCoords = async ({lat, lng}: CoordsInterface): Promise<any> => {
    if (lat && lng) {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAqDFxtJWH9NvWiLnWTNFjVQXlkipcgU6U`);
        const stringResult = response && response.data && response.data.results && response.data.results[0] && response.data.results[0]['formatted_address'];
        return stringResult;
    }
};

const degreesToRadians = (degrees: number) => {
    return degrees * Math.PI / 180;
};

export const distanceInKmBetweenEarthCoordinates = (user: CoordsInterface, car: CarInterface) => {
    const EARTH_RADIUS = 6371;

    const dLat = degreesToRadians(car.lat-user.lat);
    const dLon = degreesToRadians(car.lng-user.lng);

    const lat1 = degreesToRadians(user.lat);
    const lat2 = degreesToRadians(car.lat);

    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return EARTH_RADIUS * c * 1000;
};

export const  sortNearestCar = (user: CoordsInterface, cars: CarInterface[]) => cars.sort((a:CarInterface, b: CarInterface) => {
    if (distanceInKmBetweenEarthCoordinates(user, a) > distanceInKmBetweenEarthCoordinates(user, b)) {
        return 1; }
    if (distanceInKmBetweenEarthCoordinates(user, a) < distanceInKmBetweenEarthCoordinates(user, b)) {
        return -1; }
    return 0;
});

export const getCurrentDate = ():number => Number(moment().format('YYYY MM DD mm ss').split(' ').join(''));