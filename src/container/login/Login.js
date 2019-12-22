import React, { Component } from 'react';
import LoginToolbar from '../../components/material/LoginToolbar';
import './Login.css';
import Grid from '@material-ui/core/Grid';
import loginconnectImg from '../../assets/images/login-page-img.png';
import SignUpComponent from '../../components/signup/Signup';

class Login extends Component {
    onnavigateSignUpBtnClicked() {
        this.props.history.push(`/sign-up`);
    }
    render() {
        return (
            <div>
                <LoginToolbar />
                <div className="LoginContainer">
                    {/* <p>Login</p>
                    <button onClick={this.onnavigateSignUpBtnClicked.bind(this)}>SignUp</button> */}
                    <div>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <h2>Facebook helps you connect and share with the people in your life</h2>
                                <div className="ImageContainer">
                                    <img src={loginconnectImg} alt="login-img" />
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="SignUpFormContainer">
                                    <SignUpComponent />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;