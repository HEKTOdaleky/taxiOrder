import axios from 'axios';
import { CoordsInterface } from '../redux/order/models';

export const joinStyles = (...args: string[] | undefined[]) => args.join(' ').trim().replace(/[ \t]{2,}/g, ' ');

export const checkCoords = async ({lat, lng}: CoordsInterface) => {
    if (lat && lng) {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAqDFxtJWH9NvWiLnWTNFjVQXlkipcgU6U`);
        console.log(response)
    }
};

