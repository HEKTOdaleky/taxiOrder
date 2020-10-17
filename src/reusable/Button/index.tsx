import React from 'react';
import Typography, {TextColor, TypographyType} from '../Typography';

import styles from './index.module.scss';

type ButtonVariant = 'outlined' | 'text' | 'contained';
type ButtonSize = 'small' | 'default' | 'collapse';
type ButtonColorType = 'red' | 'orange' | 'default';
type ButtonType = 'button' | 'reset' | 'submit' | undefined;

export interface ButtonProps {
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
    fullWidth?: boolean;
    size?: ButtonSize;
    color?: ButtonColorType;
    variant?: ButtonVariant;
    children?: React.ReactChild;
    className?: string;
    style?: React.CSSProperties;
    inline?: boolean;
    typographyType?: TypographyType;
    customTextColor?: string;
    customBackground?: string;
    customBorderColor?: string;
    fontColor?: TextColor;
    type?: ButtonType;
}

export const Button = (props: ButtonProps) => {
    const {
        onClick,
        className,
        style,
        customTextColor,
        customBackground,
        customBorderColor,
        children,
        disabled = false,
        fullWidth = false,
        color = 'default',
        size = 'default',
        variant = 'contained',
        inline = false,
        typographyType = 'H5',
        fontColor = 'black',
        type = 'button'
    } = props;

    const strategyVariants: { [key: string]: string } = {
        outlined: 'outlined',
        contained: 'contained',
        text: 'text'
    };

    const strategySize: { [key: string]: string } = {
        small: 'size-small',
        default: 'size-default',
        collapse: 'size-collapse'
    };

    const classNameList = [
        className,
        styles.button,
        styles[`button__${strategySize[size]}`],
        styles[`button__color-${color}`],
        disabled ? styles['button__disabled'] : undefined,
        fullWidth ? styles['button__full-width'] : undefined,
        inline ? styles['button__inline'] : undefined,
        styles[`button__variant-${strategyVariants[variant]}`]
    ].join(' ').trim().replace(/[ \t]{2,}/g, ' ');

    const customStyles = { ...style, color: customTextColor, background: customBackground, borderColor: customBorderColor};

    return (

        <button
            onClick={onClick}
            style={customStyles}
            disabled={disabled}
            className={classNameList}
            type={type}>
            <Typography type={typographyType} color={fontColor}>
                {children}
            </Typography>
        </button>

    );

};

export default Button;
