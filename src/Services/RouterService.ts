import {ComponentType} from 'react';
import Guards, {Middleware} from '../Middleware';
import Service from './Service';

export interface Route {
  path: string | string[];
  component: ComponentType<unknown>;
  shouldRender?: boolean | (() => boolean);
  middleware?: Array<keyof typeof Guards|Middleware>;
  exact?: boolean;
}

class RouterService extends Service {
  private _routes: Route[] = [];
  private _filtered?: Route[] = null;

  protected filterRoutes() {
    return this._routes;
  }

  public get routes() {
    return this._filtered ?? this.filterRoutes();
  }

  public refresh() {
    this._filtered = this.filterRoutes();
    this.emit('update', this._filtered);
  }

  public addRoute(...routes: Route[]) {
    this.routes.push(...routes);
    this.emit('update');
  }
}

export default new RouterService();
