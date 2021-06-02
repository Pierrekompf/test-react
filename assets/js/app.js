import React from 'react';
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
    return <HashRouter>
        <Switch>
            <Route path='/' render={() => <HomePage/>}/>
        </Switch>
    </HashRouter>
}

const rootElement = document.querySelector('#app')
ReactDOM.render(<App/>, rootElement)