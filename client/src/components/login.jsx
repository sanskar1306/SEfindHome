import React from "react";
import { getregisteredUserData } from "../Redux/reducers/users";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { refreshTokenSetup } from "./refreshToken";

const clientId =
    "637286602051-he39r2u56o4ks6a9g0e38mtu6rro8hlr.apps.googleusercontent.com";

function Login() {
    const dispatch = useDispatch();
    async function responseGoogle(response) {
        if (response.profileObj) {
            dispatch(getregisteredUserData(response.profileObj));
            // console.log(response.profileObj);
            // alert(
            //   `Logged in successfully welcome ${response.profileObj.name} 😍. \n See console for full profile object.`
            // );
            refreshTokenSetup(response);
        } else {
            console.log("Login failed: res:", response);
            alert(
                `Failed to login. 😢 Please ping to the developer if problem persists`
            );
        }
    };

    return (
        <div data-testid="login">
            <GoogleLogin
                clientId={clientId}
                buttonText="Signin with Google"
                theme="dark"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                style={{ marginTop: "100px" }}
                isSignedIn={true}
            />
        </div>
    );

}

export default Login;