import React, {useState} from 'react';
// @ts-ignore
import GoogleAutocomplete from 'react-google-autocomplete';
import InputHOC from '../../reusable/InputHOC';

const CONTAINER_STYLE = {
    height: '100%',
    width: '100%'
};

const GOOGLE_AUTOCOMPLETE_DEFAULT_PROPS = {
    placeholder: 'Ижевск, Пушкинская 144',
    types: [],
    componentRestrictions: {
        country: 'RU'
    }
};

const ERROR_MESSAGE = 'The postcode cannot be found. Please enter your full address';
const ERROR_CANNOT_FOUND = 'Address not found. If you can\'t find your address, enter your post code in the search bar';

interface GoogleAutocompleteInterface {
    saveAddress: (a: any, b: any) => void;
    onBlur: () => void;
    clearAddressResult: () => void;
    error: any;
    coords: any;
}

const GoogleAutocompleteInput = ({saveAddress, onBlur, clearAddressResult, error, coords}: GoogleAutocompleteInterface) => {
    const [isChanged, setChangedState] = useState<boolean>(false);
    const [isBlur, setBlurState] = useState<boolean>(false);

    const handlePlaceSelected = (place: any) => {
        if (place && place.geometry) {
            const {location} = place.geometry;
            const {lat, lng} = location;
            const coords = {
                lat: lat(),
                lng: lng()
            };


            const address: any = {};
            place['address_components'].forEach((item: any) => {
                if (item.types && !item.types.includes('country')) {
                    address[item.types[0]] = item['long_name'];
                }
            });

            if (address['postal_code']) {
                saveAddress(address, coords);
            }
        }
    };

    const onBlurAutocomplete = () => {
        setTimeout(() => {
            onBlur();
            setBlurState(true);
        }, 500);
    };

    const onChange = () => {
        setBlurState(false);
        setChangedState(true);
        clearAddressResult();
    };


    const isError = error || (isChanged && isBlur && !coords.lat);
    const errorMessage = (isChanged && isBlur) ? ERROR_CANNOT_FOUND : ERROR_MESSAGE;

    return (
        <div style={CONTAINER_STYLE}>
            <InputHOC
                error={isError && errorMessage}
                label='From'>
            <GoogleAutocomplete
                onChange={onChange}
                onBlur={onBlurAutocomplete}
                {...GOOGLE_AUTOCOMPLETE_DEFAULT_PROPS}
                onPlaceSelected={handlePlaceSelected}/>
            </InputHOC>
        </div>
    );
};

export default GoogleAutocompleteInput;
