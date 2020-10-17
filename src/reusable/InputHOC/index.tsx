import React from 'react';
import Typography from '../Typography';

const styles = require('./index.module.scss');

interface InputHOCInterface {
    children: React.ReactChild;
    label?: string;
    error?: string;
}

const InputHOC = ({children, label, error}: InputHOCInterface) => (
    <div className={styles['text-field']}>
        {label && <Typography
            color='grey'
            fontWeight={700}
            inline={true}
            type='Body2'
            className={styles['text-field__label-input']}>
            {label}
        </Typography>}


        {children}
        <Typography
            className={styles['text-field__label-error']}
            color='red'
            type='Body2'
            fontWeight={700}>
            {error}
        </Typography>
    </div>
);

export default InputHOC;