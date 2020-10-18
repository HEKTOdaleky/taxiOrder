import axios from 'axios';
import { CoordsInterface } from '../redux/order/models';

export const joinStyles = (...args: string[] | undefined[]) => args.join(' ').trim().replace(/[ \t]{2,}/g, ' ');

export const checkCoords = async ({lat, lng}: CoordsInterface): Promise<any> => {
    if (lat && lng) {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAqDFxtJWH9NvWiLnWTNFjVQXlkipcgU6U`);
        const stringResult = response && response.data && response.data.results && response.data.results[0] && response.data.results[0]['formatted_address'];
        return stringResult;
    }
};

