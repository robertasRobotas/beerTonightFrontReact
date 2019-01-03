import React ,{Component} from 'react';
import LoginForm from './components/loginForm';
import axios from 'axios';


class Login extends Component{


constructor(props){
    super(props);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

        let loginInfo = {
            email : this.state.email,
            password : this.state.password
        };



        axios.post('https://beer-tonight.herokuapp.com/user/login', loginInfo)
            .then((result)=>{

                localStorage.setItem('token', result.data.token);

                this.props.history.push('/home')

            })
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