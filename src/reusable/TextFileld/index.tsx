import React, {useState} from 'react';
import Typography from '../Typography';
import NumberFormat from 'react-number-format';

const styles = require('./index.module.scss');

type TextFieldType = 'text' | 'email' | 'password' | 'number' | 'phone';
type TextFieldValue = string | number;

interface TextFieldProps {
    id: string;
    value?: TextFieldValue;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    placeholder?: string;
    step?: number;
    type?: TextFieldType;
    label?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
    isDisabledOutline?: boolean;
    autoFocus?: boolean;
    borderTopColor?: string;
    borderRightColor?: string;
    borderBottomColor?: string;
    borderLeftColor?: string;
    customInputBackground?: string;
    customInputColor?: string;
    customLabelColor?: string;
    customEyeColor?: string;
    borderRadius?: string;
    error?: string;
}

const TextField = (props: TextFieldProps) => {

    const {
        fullWidth = false,
        disabled = false,
        isDisabledOutline = false,
        autoFocus = false,
        borderRadius = '5px',
        customInputColor,
        customInputBackground,
        id,
        onChange,
        step,
        onKeyUp,
        onClick,
        placeholder,
        value,
        label,
        onBlur,
        className,
        type = 'text',
        error
    } = props;

    const [inputState] = useState(type);

    const classNameList = [
        styles['text-field'],
        styles[fullWidth ? 'text-field__full-width' : ''],
        styles[error ? 'text-field__error' : ''],
        className
    ].join(' ').replace(/ {2,}/g, ' ').trim();

    const inputClassName = [
        styles[disabled ? 'text-field__disabled' : ''],
        styles[isDisabledOutline ? 'text-field__disabled-outline' : ''],
    ].join(' ').replace(/ {2,}/g, ' ').trim();

    const inputColorStyle = {
        borderRadius: borderRadius,
        borderWidth: '1px',
        borderStyle: 'solid',
    };

    const inputProps = {
        disabled,
        id,
        placeholder,
        onChange,
        onKeyUp,
        onBlur,
        step,
        value,
        autoFocus,
        onClick,
        type: inputState,
        style: inputColorStyle,
        className: inputClassName,
    };

    return (
        <div className={classNameList} style={{background: customInputBackground}}>
            {label && (
                <Typography
                    color='grey'
                    fontWeight={700}
                    customColor={customInputColor}
                    inline={true}
                    type='Body2'
                    className={styles['text-field__label-input']}>
                    {label}
                </Typography>
            )}

            {type === 'phone' ?
                <NumberFormat {...inputProps} type='tel' format='+1 (###) ###-####' mask='_'/> :
                <input {...inputProps}/>}
            <Typography
                className={styles['text-field__label-error']}
                color='red'
                type='Body2'
                fontWeight={700}>
                {error}
            </Typography>
        </div>
    );
};

export default TextField;
