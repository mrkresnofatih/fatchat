import React from 'react';

function App() {
    return (
        <div className="App">
            <p>FATCHAT-{process.env.REACT_APP_PROFILE}</p>
        </div>
    );
}

export default App;
