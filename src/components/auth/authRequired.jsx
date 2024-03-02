import React from "react";
import { useNavigate } from "react-router-dom";
import AppPaths from "../../lib/appPaths";
import Constants from "../../lib/constants";
import CookieUtil from "../../utils/cookieUtil";

const AuthRequired = (Component) => {
    //   return class AuthenticatedComponent extends React.Component {
    
    const AuthenticatedComponent = (props) => {

        // render() {
        const navigate = useNavigate();
        React.useEffect(() => {
            if (!CookieUtil.getCookie(Constants.ACCESS_PROPERTY)) {
                navigate(AppPaths.LOGIN);
            }
        }, [navigate]);

        return CookieUtil.getCookie(Constants.ACCESS_PROPERTY) ? <Component {...props} /> : null;
  };
        // if (CookieUtil.getCookie(Constants.ACCESS_PROPERTY)) {
        //     return <Component {...this.props} />;
        // }
        // navigate(AppPaths.LOGIN);
        // return null;
        //   return <redirect to={AppPaths.LOGIN} />;
    // };
    return AuthenticatedComponent;
    // }
  };
// };

export default AuthRequired;