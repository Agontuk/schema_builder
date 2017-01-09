import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Schema from 'containers/Schema';

const App = () => {
    return (
        <Provider store={ store }>
            <Schema />
        </Provider>
    );
};

export default App;