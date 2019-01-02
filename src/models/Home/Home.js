import React ,{Component} from 'react';
import Header from './components/header/header';
import classes from './Home.module.css';


class Router extends Component{

    render(){
        return(
            <div className={classes.Home} >
         <Header/>



            </div>
        )
    }

}

export default Router;