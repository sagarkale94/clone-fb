import React from 'react';
import { withRouter } from 'react-router-dom';

export default function requireAuth(Component) {
    class AuthenticatedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                auth: JSON.parse(localStorage.getItem('user')) != undefined ? JSON.parse(localStorage.getItem('user')).isLoggedIn : false
            }
        }
        componentDidMount() {
            this.checkAuth();
        }
        checkAuth() {
            const location = this.props.location;
            const redirect = location.pathname + location.search;
            if (!this.state.auth) {
                this.props.history.push(`/login`);
            }
        }
        render() {
            console.log('state', this.state)
            return this.state.auth
                ? <Component {...this.props} />
                : null;
        }
    }
    return withRouter(AuthenticatedComponent)
}