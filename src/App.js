import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Hello from './components/Hello/Hello';


class App extends React.Component {
    render() {
        return(
            <Hello />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
