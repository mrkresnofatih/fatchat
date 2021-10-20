// @flow
import * as React from 'react';
import {useState} from 'react';
import styles from './footer.module.css';
import {Icon} from "../../atoms/Icon/Icon";

type footerObject = {
    iconFileName: string,
    size: number,
    onClick: () => void
};

type Props = {
    footerObjects: footerObject[]
};
export const Footer = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const footerButtonOnClick = (index: number, onClick: ()=>void) => () => {
        setActiveIndex(index);
        onClick();
    }
    return (
        <div className={styles.footerContainer}>
            {props.footerObjects.map((footerObject, index) => (
                <label className={styles.footButtonLabel} onClick={footerButtonOnClick(index, footerObject.onClick)}>
                    <FooterButton
                        iconFileName={footerObject.iconFileName}
                        isActive={index === activeIndex}
                        size={30}
                    />
                </label>
            ))}
        </div>
    );
};

const FooterButton = (props: {
    iconFileName: string,
    isActive: boolean,
    size: number
}) => {
    return (
        <div className={`${styles.footerButton} ${props.isActive && styles.footerActive}`}>
            <Icon iconFileName={props.iconFileName} size={props.size}/>
        </div>
    )
}