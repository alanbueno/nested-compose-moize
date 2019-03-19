import React from 'react';
import ReactDOM from 'react-dom';
import SomePage from './SomePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SomePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
