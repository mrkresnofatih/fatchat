// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import {Icon} from "components/atoms/Icon/Icon";
import {Text} from "components/atoms/Text/Text";
import {Avatar} from "components/atoms/Avatar/Avatar";
import {Header} from "components/atoms/Header/Header";
import styles from './headerhome.module.css';
import {IconFileNames} from "constants/asset";

export const HeaderHome = () => {
    const homeIcon: ReactNode = <Icon iconFileName={IconFileNames.FILLED_CHAT_ORANGE} size={40}/>;
    const homeText: ReactNode = <Text text={"FATCHAT"} className={styles.headerHomeText}/>
    const homeProfile: ReactNode = <Avatar src={"randAva"} size={40}/>
    return (
        <Header
            Icon={homeIcon}
            Text={homeText}
            Extra={homeProfile}
            className={styles.headerHome}
        />
    );
};