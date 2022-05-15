import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {updateCurrentProfile} from "../../redux/profileReducer";
import Profile from "./Profile";


class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.updateCurrentProfile(response.data);
            })
    }

    render() {
        return <Profile {...this.props} />
    }
}

function mapStateToProps(state) {
    return {
        currentProfile: state.profilePage.currentProfile,
    }
}

export default connect(mapStateToProps, {updateCurrentProfile})(ProfileContainer)