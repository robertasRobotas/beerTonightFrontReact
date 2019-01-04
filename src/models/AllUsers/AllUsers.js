import React, {Component} from 'react';
import styles from "./components/AllUsers.module.css";
import axios from 'axios';
import {Table} from "react-bootstrap";


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

    render() {

        let num =0;
        let users = this.state.allUsers.map(user => {

             num = num +1  ;
            return(<Table key={user._id}>

                <tbody>
                <tr>
                    <td>{num}</td>
                    <td>{user.name}</td>
                    <td>{user.beerTonight ? ('true')
                        : 'false'}</td>
                </tr>
                </tbody>
            </Table>)


        });

        return (
            <div className={styles.EntireList}>
                {users}
            </div>
        );
    }

}

export default AllUsers;