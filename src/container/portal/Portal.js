import React, { Component } from 'react';
import Card from '../../components/material/RecipeReviewCard';
import ToolBar from '../../components/material/PrimarySearchAppBar';
import Posts from './posts/Posts';
import { Route, Redirect, Switch } from 'react-router-dom';

class Portal extends Component {
    // onnavigateSignUpBtnClicked() {
    //     console.log(this.props.match.url + `dashboard`);
    //     this.props.history.push(this.props.match.url + 'dashboard');
    // }
    render() {
        return (
            <div>
                <ToolBar />
                {/* <div style={{ 'padding': '20px' }}>
                    <Card />
                </div> */}
                {/* <button onClick={this.onnavigateSignUpBtnClicked.bind(this)}>Dashboard</button> */}
                <Switch>
                    <Route path={this.props.match.url + 'test'} render={() => <p>Test</p>} />
                    <Route path={this.props.match.url} component={Posts} />
                    <Redirect from={this.props.match.url} to={this.props.match.url} />
                </Switch>
            </div>
        );
    }
}

export default Portal;