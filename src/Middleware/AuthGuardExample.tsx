import React from 'react';
import {MiddlewareNext} from './index';

export default function AuthGuardExample({next: Next}: {next: MiddlewareNext}) {
  if (localStorage.getItem('authed') !== null) {
    // @ts-ignore
    return (<Next />);
  }

  return null;
}
