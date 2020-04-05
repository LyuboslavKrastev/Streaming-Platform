// WARNING: both Access Keys and Secret Keys must remain confidential.
// The canonical way to use such API keys is to get the client side app to send a request to your backend API.
import GetOAuthClientId from "../secrets/GetOAuthClientId";
import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    // initialize the google api client library
    window.gapi.load("client:auth2", () => {
        window.gapi.client.init({
            clientId: GetOAuthClientId(),
            scope: 'email'
        })
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
