import React ,{Component} from 'react';
import {Route} from 'react-router-dom';
import styles from './Root.module.css';
import Login from '../models/Login/Login';
import Singup from '../models/Singup/Singup';
import Home from '../models/Home/Home';
import AllUsers from '../models/AllUsers/AllUsers'
import SingupSucc from '../models/UserCreated/UserCreated';

class Router extends Component{

    render(){
        return(
            <div className={styles.Background}>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/singup" exact component={Singup} />
                <Route path="/home" exact component={Home} />
                <Route path="/allUsers" exact component={AllUsers} />
                <Route path="/singupSucc" exact component={SingupSucc} />
            </div>
        )
    }

}

export default Router;