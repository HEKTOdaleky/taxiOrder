import React, {useEffect} from 'react';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng, Suggestion,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import TextField from '../../reusable/TextFileld';
import {CoordsInterface} from '../../redux/order/models';
import Typography from '../../reusable/Typography';
import Paper from '../../reusable/Paper/Paper';

const styles = require('./index.module.scss');

interface GoogleAutocompleteInterface {
    saveAddress: (coords: CoordsInterface) => void;
    clearAddressResult: () => void;
    error: string;
    coords?: CoordsInterface;
    customValue: string;
}

const PlacesAutocomplete = ({saveAddress, customValue}: GoogleAutocompleteInterface) => {
    const {
        ready,
        value,
        suggestions: {status, data},
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            componentRestrictions: {
                country: 'RU'
            }
        },
        debounce: 300,
    });

    const ref = useOnclickOutside(() => {
        clearSuggestions();
    });

    useEffect(() => {
        setValue(customValue);
    }, [customValue]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSelect = ({description}: any) => () => {
        setValue(description, false);
        clearSuggestions();
        getGeocode({address: description})
            .then((results) => getLatLng(results[0]))
            .then(({lat, lng}) => {
                saveAddress({lat, lng});
            })
            .catch((error) => {
                console.log('😱 Error: ', error);
            });
    };

    const renderSuggestions = () =>
        data.map((suggestion: Suggestion, idx: number) => {
            const {
                structured_formatting: {main_text, secondary_text},
            } = suggestion;

            return (
                <li key={idx} onClick={handleSelect(suggestion)}>
                    <Paper className={styles['autocomplete__result-row']} color='grey'>
                        <Typography type='Subtitle2' color='black'>{main_text}</Typography>
                        <Typography type='Body2' color='grey'>{secondary_text}</Typography>
                    </Paper>
                </li>
            );
        });

    return (
        <div ref={ref} className={styles['autocomplete']}>
            <TextField
                id='autocomplete'
                fullWidth
                label='Откуда'
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder='Начните вводить адрес, например: Ижевск улица Пушкина 144'
            />
            {/* We can use the "status" to decide whether we should display the dropdown or not */}
            {status === 'OK' &&
            <Paper className={styles['autocomplete__result']} color='white'>
                <ul className={styles['autocomplete__table']}>{renderSuggestions()}</ul>
            </Paper>}
        </div>
    );
};

export default PlacesAutocomplete;