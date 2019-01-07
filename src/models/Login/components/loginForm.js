import React, {Component} from 'react';
import styles from "./Login.module.css";
import {Button, Checkbox, Col, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

class LoginForm extends Component{
    render(){
    return(
        <div className={styles.Login}>

            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email" value={this.props.email} onChange={(event) =>this.props.emailChange(event)} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" value={this.props.password} onChange={(event)=>this.props.passwordChange(event)} />
                    </Col>
                </FormGroup>
                <div className={styles.Error}>{this.props.error}</div>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>

                        <div className={styles.Buttons}>

                            <div className={styles.AlignItems}>
                                <Button  onClick={this.props.onSubmit}>Sign in</Button>
                            </div>
                            <div className={styles.AlignItems}>
                                <Link to="/singup">Singup</Link>
                            </div>

                        </div>

                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
    }
}

export default LoginForm;