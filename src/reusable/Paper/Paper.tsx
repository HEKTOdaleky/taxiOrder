import React from 'react';

const styles = require('./index.module.scss');

type ContainerElement =
    'address'
    | 'article'
    | 'aside'
    | 'blockquote'
    | 'div'
    | 'footer'
    | 'form'
    | 'header'
    | 'li'
    | 'main'
    | 'nav'
    | 'section'
    | React.ElementType<React.HTMLAttributes<HTMLElement>>;
type ShadowColor = 'white' | 'grey';

interface PaperProps {
    element?: ContainerElement;
    color?: ShadowColor;
    children?: React.ReactNode | React.ReactNodeArray;
    className?: string;
    style?: React.CSSProperties;
}

const Paper = (props: PaperProps) => {

    const {
        element = 'div',
        color = 'white',
        className,
        children,
        style
    } = props;

    const paperStyle = {
        ...style
    };

    const classNames = [styles['paper'], className, styles[`paper__color-${color}`] ].join(' ').trim().replace(/[ \t]{2,}/g, ' ');

    return (React.createElement(element, {className: classNames, style: paperStyle}, children));
};

export default Paper;
