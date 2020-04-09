// WARNING: both Access Keys and Secret Keys must remain confidential.
// The canonical way to use such API keys is to get the client side app to send a request to your backend API.
import GetOAuthClientId from "../secrets/GetOAuthClientId";
import React from "react";
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {

  componentDidMount() {
    // initialize the google api client library
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: GetOAuthClientId(),
        scope: 'email'
      }).then(() => { // when the entire library is ready
        this.auth = window.gapi.auth2.getAuthInstance();

        // update the auth state in the redux store
        this.onAuthChange(this.auth.isSignedIn.get());

        // wait for the authentication status to change at some point in the future
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>we are not signed in probably</div>
    } else if (this.props.isSignedIn) {
      return <button onClick={this.onSignOutClick} className="ui red google button">
        <i className="google icon" />
        Sign Out
      </button>
    }
    else {
      return <button onClick={this.onSignInClick} className="ui green google button">
        <i className="google icon" />
      Sign In with Google
    </button>
    }
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
