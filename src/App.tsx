import React from 'react';
import styles from './app.module.css';
import {HeaderHome} from "components/organisms/Header/HeaderHome";

function App() {
    return (
        <div className={styles.app}>
            <HeaderHome/>
        </div>
    );
}

export default App;
