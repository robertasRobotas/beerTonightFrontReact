import React ,{Component} from 'react';
import {Route} from 'react-router-dom';
import Home from '../models/Home/Home';
import styles from './Root.module.css';
import Login from '../models/Login/Login';

class Router extends Component{

    render(){
        return(
            <div className={styles.Background}>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
            </div>
        )
    }

}

export default Router;