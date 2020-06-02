import { Sidebar } from '@components/layout';
import Dashboard from '@pages/Dashboard';
import Icons from '@pages/Icons';
import Maps from '@pages/Maps';
import Notifications from '@pages/Notifications';
import Profile from '@pages/Profile';
import TableList from '@pages/TableList';
import Typography from '@pages/Typography';
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const Router = ({ children }) => {
    const { location } = window;

    const basename = location.hostname === 'localhost' ? "" : "/material-dashboard"

    return (
        <BrowserRouter basename={basename}>
            <Sidebar />
            {children}
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

export default Router;
