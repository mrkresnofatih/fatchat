export enum AssetType {
    ICON="icons"
}

export const getAssetUrl = (
    assetType: AssetType,
    assetFileName: string
): string => require("assets/"+assetType+"/"+assetFileName+".png").default;