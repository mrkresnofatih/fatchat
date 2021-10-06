import {AssetType} from "constants/asset";

export const getAssetUrl = (
    assetType: AssetType,
    assetFileName: string
): string => require("assets/"+assetType+"/"+assetFileName).default;