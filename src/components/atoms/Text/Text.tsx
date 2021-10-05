// @flow
import * as React from 'react';
import styles from './text.module.css';

type Props = {
    text: string | number,
    className?: any
};
export const Text = (props: Props) => {
    const {text, className} = props;
    return (
        <p className={`${styles.baseText} ${className}`}>{text}</p>
    );
};