import {connect} from "react-redux";
import React, {useDebugValue} from "react";
import Header from "./Header";
import {userAuth} from "../../redux/authReducer";
import axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
        })
            .then(response => {
                if (!response.data.resultCode) {
                    let {email, id, login} = response.data.data;
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