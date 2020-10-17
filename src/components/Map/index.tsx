import React, { Fragment } from 'react';
import {
    withGoogleMap,
    GoogleMap,
    Marker
} from 'react-google-maps';
import mark from '../../assets/images/icons/other.svg';
import user from '../../assets/images/icons/user.svg';

import {CoordsInterface} from '../../redux/order/models';

const DEFAULT_LAT: number = 56.845464;
const DEFAULT_LNG: number = 53.211446;
const DEFAULT_ZOOM: number = 12;

interface MapInterface {
    places: MapPlacesInterface[];
    coordinates: MapPlacesInterface;
    onClick?: () => void;
    foundAddress?: CoordsInterface;
}

interface MapPlacesInterface {
    lat: string;
    lng: string;
    idx: number;
}

const Map = ({ places, coordinates, onClick, foundAddress }: MapInterface) => {

    const center = { lat: (coordinates && coordinates.lat) || DEFAULT_LAT, lng: (coordinates && coordinates.lng) || DEFAULT_LNG };
    const defaultFirstMarker = places && places[0];
    const defaultCenter = defaultFirstMarker || center;

    return (
        <GoogleMap
            defaultZoom={DEFAULT_ZOOM}
            defaultCenter={defaultCenter}
            zoom={DEFAULT_ZOOM}
            center={defaultCenter}
        >
            {places.map(({lat, lng, idx}: MapPlacesInterface) => {
                if (!lat) {
                    return null;
                }
                return (
                    <Fragment key={idx}>
                        <Marker
                            position={{
                                lat: parseFloat(lat),
                                lng: parseFloat(lng)
                            }}
                            icon={{
                                url: mark,
                            }}
                            onClick={onClick}
                        />
                    </Fragment>
                );
            }) }
            <Marker
                position={foundAddress}
                icon={{
                    url: user,
                }}/>
        </GoogleMap>
    );
};

export default withGoogleMap(Map);
