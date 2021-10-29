import {ComponentType} from 'react';
import AuthGuardExample from './AuthGuardExample';

export type MiddlewareNext = ComponentType<unknown>|Middleware;
export type Middleware = ComponentType<unknown>|((props: {next: MiddlewareNext}) => unknown);

export default {
  AuthGuardExample,
};
