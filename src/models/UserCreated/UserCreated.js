import React, {Component} from 'react';
import styles from "./UserCreated.module.css";



class UserCreated extends Component {


    constructor(){

        super();

        this.turnOffStatusLog =  this.turnOffStatusLog.bind(this);
    }

    state = {
        message: 'User created successfully!',
        statusLog : false
    };


    turnOffStatusLog(){

        this.setState({
            statusLog : false
        });

    }

    toHome(){
        this.props.history.push('/home');
    }


    render() {




        return (
<div className={styles.Background}>
    <div className={styles.BlankSpace}></div>
    <div>User Created Successfully!</div>
    <div className={styles.BlankSpace}></div>
    <div className={styles.Button}><button onClick={this.toHome}>LogIn</button></div>


</div>
        )
    }
}

export default UserCreated;