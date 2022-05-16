import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {updateCurrentProfile} from "../../redux/profileReducer";
import Profile from "./Profile";
import {useParams} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.param.id;
        this.props.updateCurrentProfile(null);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

const TakeParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}

export default connect(mapStateToProps, {updateCurrentProfile})(TakeParams)