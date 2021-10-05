// @flow
import * as React from 'react';
import {Image} from "components/atoms/Image/Image";
import {AssetType, getAssetUrl} from "constants/image";

type Props = {
    iconFileName: string
};
export const Icon = (props: Props) => {
    const iconUrl = getAssetUrl(AssetType.ICON, props.iconFileName);
    return (
        <Image src={iconUrl}/>
    );
};