// @flow
import * as React from 'react';
import styles from './avatar.module.css';
import {Image} from "../Image/Image";

type Props = {
    src: string,
    size: number
};
export const Avatar = (props: Props) => {
    const {src, size} = props;
    const adjustedSize: number = size-6;
    return (
        <div className={`${styles.avatarMask}`} style={{height: adjustedSize, width: adjustedSize}}>
            <Image
                src={src}
                fallbackSrc={"https://tegalsec.org/wp-content/themes/cera/assets/images/avatars/user-avatar.png"}
            />
        </div>
    );
};