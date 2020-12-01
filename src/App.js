import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';

import Resume from './components/Resume/Resume';


class App extends React.Component {
    render() {
        return(
            <Resume />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
