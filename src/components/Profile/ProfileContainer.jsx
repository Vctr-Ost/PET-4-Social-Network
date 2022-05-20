import React from "react";
import {connect} from "react-redux";
import {updateCurrentProfile} from "../../redux/profileReducer";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {profileAPI} from "../../api/api";
import {AuthRedirect} from "../../hoc/AuthRedirect";


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
        return <Profile {...this.props} />
    }
}

const RedirectOnAuth = AuthRedirect(ProfileContainer)
const TakeParams = (props) => {
    return <RedirectOnAuth {...props} param={useParams()} />
}

function mapStateToProps(state) {
    return {
        currentProfile: state.profilePage.currentProfile,
    }
}
export default connect(mapStateToProps, {updateCurrentProfile})(TakeParams)