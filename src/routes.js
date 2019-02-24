import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WhyskysView from './components/WhyskysView';
import Photos from "./components/photos";

class Routes extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={WhyskysView} />
                <Route path="/photos" component={Photos} />
            </Switch>
        )
    }
}

export default Routes;