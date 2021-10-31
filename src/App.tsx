import React from 'react';
import {Page} from "./components/atoms/Page/Page";
import {Center} from "./components/atoms/Center/Center";
import {SignupCard} from "./components/organisms/Card/SignupCard";

function App() {
    return (
        <Page wallpaper={"darkSnacks"}>
            <Center>
                <SignupCard/>
            </Center>
        </Page>
    );
}

export default App;
