import React, {Component} from 'react';
import styles from "./Home.module.css";
import axios from 'axios';
import {Link} from 'react-router-dom'


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
        }).then((result) => {

            this.setState({
                status: result.data.beerStatus
            });
        })
    }


    changeStatus() {

        let token = localStorage.getItem('token');

        axios.get('https://beer-tonight.herokuapp.com/beer/changeBeerStatus', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((result) => {
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
            <div>
                <div className={styles.Login} onClick={this.changeStatus}>
                    {beerStatus}
                </div>
                <div className={styles.Blank}></div>


                <div className={styles.Link}>
                <Link to='/allUsers'>See who Beer Tonight</Link>
                </div>

            </div>
        )
    }
}

export default Home;