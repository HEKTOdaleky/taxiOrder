import React from 'react';
import Paper from '../../reusable/Paper/Paper';
import Map from '../Map';

const OrderTaxi = () => (
    <Paper color='white'>
        <div className='location-tab_map'>
            <Map
                onClick={() => {}}
                places={[]}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
                loadingElement={<div className='google-map'/>}
                containerElement={<div className='google-map'/>}
                mapElement={<div className='google-map'/>}
            />
        </div>
    </Paper>
);

export default OrderTaxi;