import React from 'react';

import styles from './index.module.scss';

export type TextColor = 'black' | 'grey' | 'light-grey' | 'purple' | 'red' | 'orange' | 'white';

type TypographyElementType =
    'address'
    | 'article'
    | 'aside'
    | 'blockquote'
    | 'div'
    | 'footer'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'header'
    | 'li'
    | 'main'
    | 'nav'
    | 'p'
    | 'section'
    | 'span';

type TypographyTagMapping = { [key in TypographyType]: TypographyElementType };

const TAG_MAPPING: TypographyTagMapping = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
    Body1: 'p',
    Body2: 'p',
    Caption: 'span',
    Overline: 'span',
    Subtitle1: 'p',
    Subtitle2: 'p'
};

type TypographyTypeMapping = { [key in TypographyType]: string };

const TYPE_MAPPING: TypographyTypeMapping = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
    Body1: 'body1',
    Body2: 'body2',
    Caption: 'caption',
    Overline: 'overline',
    Subtitle1: 'subtitle1',
    Subtitle2: 'subtitle2'
};

export type TypographyType =
    'H1'
    | 'H2'
    | 'H3'
    | 'H4'
    | 'H5'
    | 'H6'
    | 'Body1'
    | 'Body2'
    | 'Caption'
    | 'Overline'
    | 'Subtitle1'
    | 'Subtitle2';

interface TypographyProps {
    type?: TypographyType;
    children?: React.ReactChild | React.ReactNode;
    className?: string;
    customColor?: string;
    fontWeight?: number;
    color?: TextColor;
    inline?: boolean;
    button?: boolean;
}

export const Typography = (props: TypographyProps) => {
    const {
        className,
        fontWeight,
        customColor,
        children,
        type = 'Body1',
        color = 'black'
    } = props;

    const TypographyComponent = TAG_MAPPING[type];

    const classList = [
        styles['typography'],
        styles[`typography__${TYPE_MAPPING[type]}`],
        styles[`typography__color-${color}`],
        className
    ].join(' ').trim().replace(/[ \t]{2,}/g, ' ');

    return (
        <TypographyComponent
            style={{fontWeight, color: customColor}}
            className={classList}>
            {children}
        </TypographyComponent>
    );
};

export default Typography;
