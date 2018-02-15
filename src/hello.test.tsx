import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import Hello from './hello';

describe('hello component', () => {
  it('should renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Hello />, div);
  });
})
