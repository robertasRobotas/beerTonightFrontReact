import React, {Component} from 'react';
import styles from "./statusLog.module.css";



class StatusLog extends Component {


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


    render() {




        return (
<div>

            { this.state.statusLog ? (
        <div className={styles.Background}>
            <div className={styles.BlankSpace}></div>
            <div className={styles.Log}>
                {this.state.message}
            </div>
            <div className={styles.BlankSpace}></div>
            <div className={styles.Button}>
            <button onClick={this.turnOffStatusLog} >Awesome!</button>
            </div>
        </div>) : null }

</div>
        )
    }
}

export default StatusLog;