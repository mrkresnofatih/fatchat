// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import {Button} from "components/atoms/Button/Button";
import {Icon} from "components/atoms/Icon/Icon";
import {IconFileNames} from "constants/asset";
import {Text} from "components/atoms/Text/Text";
import styles from "components/organisms/Header/headerhome.module.css";
import {Avatar} from "components/atoms/Avatar/Avatar";
import {Header} from "components/atoms/Header/Header";

type Props = {
    homeIconOnClick: () => void,
    homeProfileOnClick: () => void
};
export const HeaderHomeBase = (props: Props) => {
    const homeIcon: ReactNode =
        <Button onClick={props.homeIconOnClick}>
            <Icon iconFileName={IconFileNames.FILLED_CHAT_ORANGE} size={40}/>
        </Button>;
    const homeText: ReactNode = <Text text={"FATCHAT"} className={styles.headerHomeText}/>
    const homeProfile: ReactNode =
        <Button onClick={props.homeProfileOnClick}>
            <Avatar src={"randAva"} size={40}/>
        </Button>
    return (
        <Header
            Icon={homeIcon}
            Text={homeText}
            Extra={homeProfile}
            className={styles.headerHome}
        />
    );
};