import {connect} from "react-redux";
import {
    changeCurrentPage, follow, getUsers, unfollow,
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.usersCount, this.props.currentPage);
    }

    pagesCountOnClick = (num) => {
        this.props.changeCurrentPage(num);
        this.props.getUsers(this.props.usersCount, num);
    }

    render() {
        if (this.props.isFetching) return <Preloader/>;
        else return (<Users currentPage={this.props.currentPage}
                            totalUsersCount={this.props.totalUsersCount}
                            usersCount={this.props.usersCount}
                            pagesCountOnClick={this.pagesCountOnClick}
                            users={this.props.users}
                            isFollowInProgressArr={this.props.isFollowInProgressArr}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
        />)
    }
}


function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersCount: state.usersPage.usersCount,
        isFetching: state.usersPage.isFetching,
        isFollowInProgressArr: state.usersPage.followInProgressArr,
    }
}

export default connect(mapStateToProps, {changeCurrentPage, getUsers, follow, unfollow})(UsersAPI);