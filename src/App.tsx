import React, {Component} from 'react';
import {
  BrowserRouter, Route, Switch, withRouter,
} from 'react-router-dom';
import RouterService, {Route as RouteData} from './Services/RouterService';
import Middleware, {Middleware as MiddlewareType, MiddlewareNext} from './Middleware';

import './Routes';
import './Modules';

import './Styles/style.css';

export default class App extends Component<unknown, { routes: RouteData[] }> {
  state = {
    routes: RouterService.routes,
  };

  componentDidMount() {
    RouterService.on('update', this.updateRoutes);
  }

  componentWillUnmount() {
    RouterService.removeListener('update', this.updateRoutes);
  }

  updateRoutes = () => {
    this.setState({
      routes: RouterService.routes,
    });
  };

  renderRoute = (route: RouteData) => {
    let {middleware} = route;
    if (middleware) {
      middleware.unshift(route.component);
    } else {
      middleware = [route.component];
    }

    const firstRender = middleware.pop();

    return (
      <Route
        key={Array.isArray(route.path) ? route.path[0] : route.path}
        path={route.path}
        render={() => this.renderMiddleware(firstRender, [...middleware])}
        exact={route.exact ?? true}
      />
    );
  };

  renderMiddleware = (next: MiddlewareNext | string, remaining: Array<MiddlewareType | string>) => {
    const Next = typeof next === 'string' ? Middleware[next] : next;

    if (remaining.length === 0) {
      const Comp = withRouter(Next);
      return (<Comp />);
    }

    return (<Next next={() => this.renderMiddleware(remaining.pop(), remaining)} />);
  };

  render() {
    const {routes} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          {routes.map(this.renderRoute)}
        </Switch>
      </BrowserRouter>
    );
  }
}
