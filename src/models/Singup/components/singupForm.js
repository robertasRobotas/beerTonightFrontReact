import React, {Component} from 'react';
import styles from "./Singup.module.css";
import {Button, Checkbox, Col, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

class SingupForm extends Component{
    render(){
        return(
            <div className={styles.Login}>

                <Form horizontal>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="name" placeholder="Name" value={this.props.name} onChange={(event) =>this.props.nameChange(event)} />
                            <div className={styles.Error}>{this.props.nameErrors}</div>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" value={this.props.email} onChange={(event) =>this.props.emailChange(event)} />
                            <div className={styles.Error}>{this.props.emailErrors} </div>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" value={this.props.password} onChange={(event)=>this.props.passwordChange(event)} />
                            <div className={styles.Error}>{this.props.passwordErrors}</div>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>

                            <div className={styles.Buttons}>

                                <div className={styles.AlignItems}>
                                    <Button type="submit" onClick={(e)=>this.props.onSubmit(e)}>SignUp!</Button>
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

export default SingupForm;