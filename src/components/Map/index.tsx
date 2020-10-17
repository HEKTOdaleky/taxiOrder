import React, { Fragment } from 'react';
import {
    withGoogleMap,
    GoogleMap,
    Marker
} from 'react-google-maps';
import {
    withScriptjs
} from 'react-google-maps';
import mark from '../../assets/images/icons/other.png';

const DEFAULT_LAT: number = 56.845464;
const DEFAULT_LNG: number = 53.211446;
const DEFAULT_ZOOM: number = 12;

interface MapInterface {
    places?: any;
    coordinates?: any;
    onClick?: () => void;
}

const Map = ({ places, coordinates = {}, onClick }: MapInterface) => {

    const center = { lat: (coordinates && coordinates.lat) || DEFAULT_LAT, lng: (coordinates && coordinates.lng) || DEFAULT_LNG };
    const defaultFirstMarker = places && places[0];
    const defaultCenter = defaultFirstMarker
    && defaultFirstMarker.attributes && defaultFirstMarker.attributes.coordinates ?
        {
            lat: parseFloat(defaultFirstMarker.attributes.coordinates.lat),
            lng: parseFloat(defaultFirstMarker.attributes.coordinates.lng)
        } :
        center;

    return (
        <GoogleMap
            defaultZoom={DEFAULT_ZOOM}
            defaultCenter={defaultCenter}
            zoom={DEFAULT_ZOOM}
            center={defaultCenter}
        >
            {places.map((place: any) => {
                const { attributes: { coordinates } } = place;
                if (!coordinates) {
                    return null;
                }
                return (
                    <Fragment key={place.id}>
                        <Marker
                            position={{
                                lat: parseFloat(coordinates.lat),
                                lng: parseFloat(coordinates.lng)
                            }}
                            icon={{
                                url: mark,
                            }}
                            onClick={onClick}
                        />
                    </Fragment>
                );
            }) }
        </GoogleMap>
    );
};

export default withScriptjs(withGoogleMap(Map));
