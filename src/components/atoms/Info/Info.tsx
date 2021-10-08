// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import styles from './info.module.css';

type Props = {
    Thumbnail: ReactNode,
    InfoContent: ReactNode,
    className?: any
};
export const Info = (props: Props) => {
    return (
        <div className={`${styles.infoBase} ${props.className}`}>
            <div className={`${styles.infoBaseThumbnailContainer}`}>
                {props.Thumbnail}
            </div>
            <div className={`${styles.infoBaseContentContainer}`}>
                {props.InfoContent}
            </div>
        </div>
    );
};