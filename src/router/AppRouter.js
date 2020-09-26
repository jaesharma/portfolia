import { Router, Switch, Route } from "react-router-dom";
import React from "react";
import { createBrowserHistory } from "history";
import Dashboard from "../components/Dashboard";
import Portfolio from "../components/Portfolio";
import ViewProjectScreen from "../components/ViewProjectScreen";
import NotFound from "../components/NotFound";

export const history = createBrowserHistory();

const AppRouter = () => (
	<Router history={history}>
		<Switch>
			<Route path="/" component={Dashboard} exact={true} />
			<Route path="/portfolio/:id" component={Portfolio} />
			<Route path="/projects/:pid" component={ViewProjectScreen} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);

export default AppRouter;
