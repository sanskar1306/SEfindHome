import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";

class Logout extends Component {
    onSuccess = () => {
        // alert("logout success");
        this.props.log();
    };

    onFail = () => {
        alert("logout Failed");
    };
    render() {
        return (
            <div data-testid="logout">
                <GoogleLogout
                    clientId="637286602051-he39r2u56o4ks6a9g0e38mtu6rro8hlr.apps.googleusercontent.com"
                    buttonText="Signout"
                    onLogoutSuccess={this.onSuccess}
                    onFailure={this.onFail}
                    theme="dark"
                />
            </div>
        );
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        log: () => dispatch({ type: "LOGOUT" }),
    };
};

export default connect(null, mapDispatchtoProps)(Logout);