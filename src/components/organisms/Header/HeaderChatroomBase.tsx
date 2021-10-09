// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import {Icon} from "components/atoms/Icon/Icon";
import {IconFileNames} from "constants/asset";
import {HeaderBackBase} from "components/organisms/Header/HeaderBackBase";
import styles from "components/organisms/Header/headerchatroom.module.css";
import {Text} from "components/atoms/Text/Text";
import {Button} from "components/atoms/Button/Button";

type Props = {
    title: string,
    subtitle: string,
    backAction: () => void,
    moreAction: ()=> void
};
export const HeaderChatroomBase = (props: Props) => {
    const textComponent: ReactNode =
        <HeaderChatroomText title={props.title} subtitle={props.subtitle}/>
    const moreComponent: ReactNode =
        <Button onClick={props.moreAction}>
            <Icon iconFileName={IconFileNames.MORE_VERTICAL_WHITE} size={35}/>
        </Button>
    return (
        <HeaderBackBase Text={textComponent} Extra={moreComponent} backAction={props.backAction}/>
    );
};

const HeaderChatroomText = (props: { title: string, subtitle: string }) => {
    return (
        <div className={`${styles.chatroomTextContainer}`}>
            <Text text={props.title} className={`${styles.chatroomTitle}`}/>
            <Text text={props.subtitle} className={`${styles.chatroomSubtitle}`}/>
        </div>
    )
};