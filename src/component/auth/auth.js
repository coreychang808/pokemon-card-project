import React from 'react';
import { LoginContext } from './context';

const If = (props) => {
  // eslint-disable-next-line
  return !!props.condition ? props.children : null;
};

class Auth extends React.Component {
  static contextType = LoginContext;

  render() {
    let okToRender = false;
    try {
      // eslint-disable-next-line
      if (this.props.capability) {
        // eslint-disable-next-line
        if (this.context.user.capabilities.includes(this.props.capability)) {
          okToRender = true;
        }
      }
    } catch (e) {
      // eslint-disable-next-line
      console.warn('Not Authorized');
    }

    return (
      <If condition={okToRender}>
        {/* eslint-disable-next-line */}
        <div>{this.props.children}</div>
      </If>
    );
  }
}

export default Auth;
