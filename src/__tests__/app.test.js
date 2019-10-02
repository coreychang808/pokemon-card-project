import React from 'react';
import ReactDom from 'react-dom';
import App from '../app';


test('renders correctly', () => {
  const app = document.createElement('app');
  ReactDom.render(<App />, app);
  ReactDom.unmountComponentAtNode(app);
});
