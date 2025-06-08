// src/types/global.d.ts
import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare global {
  const React: typeof React;
  const ReactDOM: typeof ReactDOM;
}
