import React ,{Component} from 'react';
import LoginForm from './components/loginForm';



class Login extends Component{


constructor(props){
    super(props);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
}


    state = {
        email : String,
        password : String
    };

    emailChange(event) {
        this.setState({
            email : event.target.value
        });
    }

    passwordChange(event) {
        this.setState({
            password : event.target.value
        });
    }

    onSubmit(){
        console.log('submitted');
    }


    render(){
        return(
            <div>
                <LoginForm
                    email={this.state.email}
                    password={this.state.password}
                    emailChange={this.emailChange}
                    passwordChange={this.passwordChange}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }

}

export default Login;