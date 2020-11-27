import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { JobDescriptionScreen } from '../pages/JobDescriptionScreen';
import { JobScreen } from '../pages/JobScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/:id' component={JobDescriptionScreen} />

                    <Route exact path='' component={JobScreen} />
                </Switch>
            </div>
        </Router>
    );
};
