import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {userAuth} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {

        authAPI.isAuth()
            .then(data => {
                if (!data.resultCode) {
                    let {email, id, login} = data.data;
                    this.props.userAuth({email, id, login})
                }
            })
    }

    render() {
        return  <Header isAuth={this.props.isAuth}/>
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {userAuth})(HeaderContainer);