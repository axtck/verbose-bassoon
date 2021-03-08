import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router';
import DefinitionDetails from '../../components/definitions/DefinitionDetails';
import HomePage from './HomePage';

interface MainContentProps { };

const MainContent: FunctionComponent<MainContentProps> = () => {

    return (
        <Switch>
            <Route path="/definition/:term/:definitionId" component={DefinitionDetails} />
            <Route path="/home" component={HomePage} />
        </Switch>
    );
}

export default MainContent;