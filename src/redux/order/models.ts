export interface CarInterface {
    'crew_id': number;
    'car_mark': string;
    'car_model': string;
    'car_color': string;
    'car_number': string;
    'driver_name': string;
    'driver_phone': string;
    'lat': number;
    'lng': number;
    'distance': number;
}

export interface CoordsInterface {
    'lat': number;
    'lng': number;
}

export interface AddressInterface {
    'address': string;
    'lat': number;
    'lng': number;
}

export interface RequestCarInterface {
    'source_time': number;
    'addresses': AddressInterface[];
}

export interface OrderInterface extends RequestCarInterface {
    'crew_id': number;
}