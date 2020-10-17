import React, {useState} from 'react';
// @ts-ignore
import GoogleAutocomplete from 'react-google-autocomplete';
import InputHOC from '../../reusable/InputHOC';
import { CoordsInterface } from '../../redux/order/models';

const styles = require('./index.module.scss');

const GOOGLE_AUTOCOMPLETE_DEFAULT_PROPS = {
    placeholder: 'Ижевск, Пушкинская 144',
    types: [],
    componentRestrictions: {
        country: 'RU'
    }
};

const ERROR_MESSAGE = 'Ересь какая то';
const ERROR_CANNOT_FOUND = 'Адрес не найден, проверьте корректность. Начните вводить данные, например: Ижевск, Пушкинская 144';

interface GoogleAutocompleteInterface {
    saveAddress: (coords: CoordsInterface) => void;
    onBlur: () => void;
    clearAddressResult: () => void;
    error: string;
    coords?: CoordsInterface;
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

            if (place['formatted_address']) {
                saveAddress(coords);
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


    const isError = error || (isChanged && isBlur && (!coords || !coords.lat));
    const errorMessage = (isChanged && isBlur) ? ERROR_CANNOT_FOUND : ERROR_MESSAGE;

    return (
        <div className={styles['autocomplete']}>
            <InputHOC
                error={isError ? errorMessage : ''}
                label='Откудв'>
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
