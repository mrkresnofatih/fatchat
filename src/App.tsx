import React from 'react';
import {Text} from "./components/atoms/Text/Text";
import {Image} from "./components/atoms/Image/Image";

function App() {
    return (
        <div className="App">
            <Text text={"my name is fatih"}/>
            <Image src={"https://m.media-amazon.com/images/I/5156FefjlqL._SX425_.jpg"}/>
        </div>
    );
}

export default App;
