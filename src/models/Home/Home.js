import React, {Component} from 'react';
import styles from "./Home.module.css";
import axios from 'axios';


class Home extends Component{

    constructor(){
        super();

        this.changeStatus = this.changeStatus.bind(this);
    }

    state ={status: false};

   /* componentWillMount(){
        axios.get('xxx').then(
            result=>{

            })
    }
    */

   changeStatus(){
       this.setState({
           status : !this.state.status
       });
   }


    render(){


       let beerStatus;

       if(this.state.status){
           beerStatus = 'true';
       }else{
           beerStatus = 'false';
       }


        return(
            <div className={styles.Login} onClick={this.changeStatus}>
                {beerStatus}

            </div>
        )
    }
}

export default Home;