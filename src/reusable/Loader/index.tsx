import React, {useLayoutEffect} from 'react';

const styles = require('./index.module.scss');

function useLockBodyScroll() {
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return () => {document.body.style.overflow = originalStyle;};
    }, []);
}

const Loader = () => {
    useLockBodyScroll();

    return (
        <div className={styles['loader']}>
            <span className={styles['loader__icon']}/>
        </div>
    );
};

export default Loader;