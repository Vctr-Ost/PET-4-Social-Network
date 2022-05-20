import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const withAuthRedirect = (Component) => {
    class redirectClass extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(redirectClass)
}