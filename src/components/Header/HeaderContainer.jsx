import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {isAuthResult} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.isAuthResult()
    }

    render() {
        return  <Header isAuth={this.props.isAuth}/>
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {isAuthResult})(HeaderContainer);