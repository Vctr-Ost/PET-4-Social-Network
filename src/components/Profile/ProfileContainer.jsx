import React from "react";
import {connect} from "react-redux";
import {updateCurrentProfile} from "../../redux/profileReducer";
import Profile from "./Profile";
import {Navigate, useParams} from "react-router-dom";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.param.id;
        this.props.updateCurrentProfile(null);
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.updateCurrentProfile(data);
            })
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>
        return <Profile {...this.props} />
    }
}

function mapStateToProps(state) {
    return {
        currentProfile: state.profilePage.currentProfile,
        isAuth: state.auth.isAuth,
    }
}

const TakeParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}

export default connect(mapStateToProps, {updateCurrentProfile})(TakeParams)