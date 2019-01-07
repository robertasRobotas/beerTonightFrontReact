import React, {Component} from 'react';
import styles from "./Home.module.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
import StatusLog from '../StatusLogs/StatusLog';
import BeerStatusTrue from '../../components/assets/beerStatusPhoto/beerTrue.png';
import BeerStatusFalse from '../../components/assets/beerStatusPhoto/beerFalse.png';


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
        }).catch(()=>{
            this.props.history.push('/login')
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





        return (
            <div>


                <StatusLog/>

                <div className={styles.Login} onClick={this.changeStatus}>
                    {this.state.status ?
                        (<div><img src={BeerStatusTrue}/></div>) : (<div><img src={BeerStatusFalse}/></div>)
                    }

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