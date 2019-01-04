import React, {Component} from 'react';
import styles from "./Home.module.css";
import axios from 'axios';


class Home extends Component {

    constructor() {
        super();

        this.changeStatus = this.changeStatus.bind(this);
    }

    state = {
        status: Boolean
    };

    componentWillMount() {

        let token = localStorage.getItem('token');



        axios.get('https://beer-tonight.herokuapp.com/beer/getBeerStatus', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((result)=>{

            this.setState({
                status : result.data.beerStatus
            });
        })
    }




    changeStatus() {

        let token = localStorage.getItem('token');

        axios.get('https://beer-tonight.herokuapp.com/beer/changeBeerStatus', {
           headers : {
               Authorization : 'Bearer ' + token
           }
        }).then((result)=>{
            this.setState({
                status: !this.state.status
            });
        });



    }


    render() {


        let beerStatus;

        if (this.state.status) {
            beerStatus = 'true';
        } else {
            beerStatus = 'false';
        }


        return (
            <div className={styles.Login} onClick={this.changeStatus}>
                {beerStatus}

            </div>
        )
    }
}

export default Home;