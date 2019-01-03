import React, {Component} from 'react';
import SingupForm from './components/singupForm';
import axios from 'axios';


class Singup extends Component {


    constructor(props) {
        super(props);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    state = {
        name: String,
        email: String,
        password: String,
        nameErrors: [],
        emailErrors: [],
        passwordErrors: []
    };

    nameChange(event) {
        this.setState({
            name: event.target.value
        });

    }

    emailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    passwordChange(event) {
        this.setState({
            password: event.target.value
        });
    }



    async onSubmit(e) {

        e.preventDefault();

        await this.checkNameValidity();
        await this.checkEmailValidity();
        await this.checkPasswordValidity();

        this.send();

    }



    checkNameValidity() {

        let nErrs = [];

        if (this.state.name.length < 3) {

            nErrs.push('name should contain 3 letters');

            this.setState({
                nameErrors: nErrs
            });
        }


        if (this.state.name.length >= 3) {

            this.setState({
                nameErrors: []
            });
        }
    }

    checkEmailValidity() {


        let eErr = [];
        let eta = this.state.email;

        if ((eta.length === 1) || (eta.length === 0)) {
            eErr.push('Email field can not be empty')
        } else if (!eta.includes('@')) {
            eErr.push('Email must contain @ letter')
        }

        this.setState({
            emailErrors: eErr
        });


    }

    checkPasswordValidity() {


        let pErrs = [];

        if (this.state.password.length < 5) {

            pErrs.push('password should contain 5 letters');

        }

        this.setState({
            passwordErrors: pErrs
        });

    }


    send(){

        if((this.state.nameErrors.length < 1) &&(this.state.emailErrors.length < 1) && (this.state.passwordErrors.length < 1)){

            let singupInfo = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            };

            axios.post('https://beer-tonight.herokuapp.com/user/newUser', singupInfo)
                .then((result)=>{
                    if(result){
                        console.log(result);
                    }
                })


        }else{
            console.log('bad');
        }



    }


    render() {
        return (
            <div>
                <SingupForm
                    name={this.state.name}
                    email={this.state.email}
                    password={this.state.password}
                    nameChange={this.nameChange}
                    emailChange={this.emailChange}
                    passwordChange={this.passwordChange}
                    nameErrors={this.state.nameErrors}
                    emailErrors={this.state.emailErrors}
                    passwordErrors={this.state.passwordErrors}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }

}

export default Singup;