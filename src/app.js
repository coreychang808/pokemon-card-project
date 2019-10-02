import React from 'react';

// import Auth from './component/auth/auth';
import Title from './component/home-page/title';
import Login from './component/auth/login';
import LoginProvider from './component/auth/context';

// const Read = (props) => {
//   return (
//     <Auth capability="read">
//       <span>Read</span>
//     </Auth>
//   );
// };

// const Update = (props) => {
//   return (
//     <Auth capability="update">
//       <span>Update</span>
//     </Auth>
//   );
// };

// const Update = props => {
//     return (
//       <Auth capability="update">
//         <span>Update</span>
//       </Auth>
//     );
//   }

class App extends React.Component {
  render() {
    return (
      <LoginProvider>
        <Title />
        <Login />
        <hr />
        {/* <Read />
        <Update /> */}
      </LoginProvider>
    );
  }
}

export default App;
