// @flow
import * as React from 'react';
import {AssetType} from "constants/asset";
import {getAssetUrl} from "utilities/assetUtility";

type Props = {
    iconFileName: string,
    size: number
};
export const Icon = (props: Props) => {
    const iconUrl = getAssetUrl(AssetType.ICON, props.iconFileName);
    return (
        <img
            src={iconUrl}
            style={{height: props.size, width: props.size}}
            alt={"someIcon"}
        />
    );
};