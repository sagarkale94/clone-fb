import React, { Component } from 'react';
import Portal from '../container/portal/Portal';
import Login from '../container/login/Login';
import { Route, Switch, Redirect } from 'react-router-dom';
import requireAuth from '../authGuard/AuthenticatedComponent';

class RouterContainer extends Component {

    state = {
        auth: true
    }

    componentDidMount() {
        let currentUser = JSON.parse(localStorage.getItem('user')) != undefined ? JSON.parse(localStorage.getItem('user')).isLoggedIn : false;
        this.setState({ auth: currentUser });
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={requireAuth(Portal)} />
                    {!this.state.auth && <Redirect push to="/login" />}
                </Switch>
            </div>
        );
    }
}

export default RouterContainer;
