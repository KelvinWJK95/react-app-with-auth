import React from "react";
import { Navigate } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Logout extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }
  componentDidMount(){
    //removing authorization when this page is accessed
    const { cookies } = this.props;
    cookies.remove("token", { path: '/'})
  }
  render(){
    return <Navigate to="/home"/>;
  };
}

export default withCookies(Logout);
