import React from "react";
import {connect} from "react-redux";
import {getStatus, profileUpdate, updateStatus} from "../../redux/profileReducer";
import Profile from "./Profile";
import {useParams} from "react-router-dom";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.param.id;
        this.props.profileUpdate(userId);
        this.props.getStatus(userId);
    }
    render() {
        return <Profile {...this.props} />
    }
}


const TakeParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}

function mapStateToProps(state) {
    return {
        currentProfile: state.profilePage.currentProfile,
        userStatus: state.profilePage.userStatus
    }
}
export default connect(mapStateToProps, {profileUpdate, getStatus, updateStatus})(TakeParams)