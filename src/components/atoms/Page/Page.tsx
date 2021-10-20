// @flow
import * as React from 'react';
import styles from './page.module.css';
import {ReactNode} from "react";

type Props = {
    children: ReactNode,
    wallpaper: "darkSnacks" | "darkSpots" | "none"
};
export const Page = (props: Props) => {
    const {wallpaper} = props;
    let wallpaperStyle: string = "";
    switch (wallpaper) {
        case "darkSpots":
            wallpaperStyle = styles.darkSpots;
            break;
        case "darkSnacks":
            wallpaperStyle = styles.darkSnacks;
            break;
        default:
            break;
    }
    return (
        <div className={`${styles.pageContainer} ${wallpaperStyle}`}>
            {props.children}
        </div>
    );
};