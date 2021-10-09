// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import {Header} from "components/atoms/Header/Header";
import {Icon} from "components/atoms/Icon/Icon";
import {IconFileNames} from "constants/asset";
import styles from './headerbackbase.module.css';
import {Button} from "components/atoms/Button/Button";

type Props = {
    Text: ReactNode,
    Extra?: ReactNode,
    backAction: () => void
};
export const HeaderBackBase = (props: Props) => {
    const BackIcon: ReactNode =
        <Button onClick={props.backAction}>
            <Icon
                iconFileName={IconFileNames.BACK_IOS_ORANGE}
                size={45}
            />
        </Button>
    return (
        <Header
            Text={props.Text}
            Icon={BackIcon}
            Extra={props.Extra}
            className={`${styles.headerBackBase}`}
        />
    );
};