// @flow
import * as React from 'react';
import {ReactNode} from "react";
import styles from './header.module.css';

type Props = {
    Icon?: ReactNode,
    Text: ReactNode,
    Extra?: ReactNode,
    className?: any
};
export const Header = (props: Props) => {
    const {Icon, Text, Extra} = props;
    const iconTextSpaceBetween: ReactNode = (Icon) ? <div className={styles.headerBaseLeftIconTextBetween} /> : <></>;
    return (
        <div className={`${styles.headerBase} ${props.className}`}>
            <div className={styles.headerBaseLeft}>
                {Icon}
                {iconTextSpaceBetween}
                {Text}
            </div>
            <div className={`${styles.headerBaseRight}`}>
                {Extra}
            </div>
        </div>
    );
};