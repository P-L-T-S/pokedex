import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './components/Home'

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    )
}