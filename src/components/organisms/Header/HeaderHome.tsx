// @flow
import * as React from 'react';
import {HeaderHomeBase} from "components/organisms/Header/HeaderHomeBase";

export const HeaderHome = () => {
    const openMenuBar = () => console.log("open menu bar");
    const openProfilePage = () => console.log("open profile page")
    return (
        <HeaderHomeBase
            homeIconOnClick={openMenuBar}
            homeProfileOnClick={openProfilePage}
        />
    );
};