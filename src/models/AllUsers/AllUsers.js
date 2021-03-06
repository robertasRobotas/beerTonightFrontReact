import React, {Component} from 'react';
import styles from "./components/AllUsers.module.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Table} from "react-bootstrap";

import BeerStatusTrue from '../../components/assets/beerStatusPhoto/beerTrue.png';
import BeerStatusFalse from '../../components/assets/beerStatusPhoto/beerFalse.png';


class AllUsers extends Component {

    state = {
        allUsers: []
    };

    componentWillMount() {

        axios.get('https://beer-tonight.herokuapp.com/beer/getAllUsers')
            .then((result) => {

                console.log(result.data.users);
                this.setState({
                    allUsers: result.data.users
                });
            })
    }


    sendFriendInvitation() {

    }

    render() {

        let num = 0;
        let users = this.state.allUsers.map(user => {

            num = num + 1;
            return (<div key={user._id} className={styles.User}>

                <div className={styles.UserInfo} className={styles.Name}>{user.name}</div>
                <div>{user.beerTonight ? (<div><img src={BeerStatusTrue}/></div>)
                    : (<div><img src={BeerStatusFalse}/></div>)}</div>
            </div>)


        });

        return (
            <div>
                <div className={styles.Description}>Press on friend to invite him</div>
                <div className={styles.List}>
                    {users}
                </div>
                <div className={styles.BlankSpace}></div>
                <div className={styles.Link}>
                    <Link to='/home'>Back and change your status</Link>
                </div>
            </div>
        );
    }

}

export default AllUsers;