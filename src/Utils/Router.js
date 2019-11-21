import React, { Component } from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Dashboard from '@pages/Dashboard';
import Icons from '@pages/Icons';
import Maps from '@pages/Maps';
import Notifications from '@pages/Notifications';
import Profile from '@pages/Profile';
import TableList from '@pages/TableList';
import Typography from '@pages/Typography';
import Sidebar from '@components/Sidebar/Sidebar';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Sidebar />
                {this.props.children}
                <Switch>
                    <Route exact path="/"  >
                        <Redirect push to='/dashboard' />
                    </Route>
                    <Route path="/icons" component={Icons} />
                    <Route path="/maps" component={Maps} />
                    <Route path="/notifications" component={Notifications} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/tableList" component={TableList} />
                    <Route path="/typography" component={Typography} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </BrowserRouter>
        )
    }
}