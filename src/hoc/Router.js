import React ,{Component} from 'react';
import {Route} from 'react-router-dom';
import Home from '../models/Home/Home';


class Router extends Component{

    render(){
        return(
            <div>
                <Route path="/" exact component={Home} />
            </div>
        )
    }

}

export default Router;