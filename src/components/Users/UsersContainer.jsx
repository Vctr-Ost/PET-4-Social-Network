import {connect} from "react-redux";
import {
    changeCurrentPage, followInProgress,
    followToggle,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.usersCount, this.props.currentPage)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    pagesCountOnClick = (num) => {
        this.props.changeCurrentPage(num);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.usersCount, num)
            .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    render() {
        if (this.props.isFetching) return <Preloader/>;
        else return (<Users currentPage={this.props.currentPage}
                            totalUsersCount={this.props.totalUsersCount}
                            usersCount={this.props.usersCount}
                            pagesCountOnClick={this.pagesCountOnClick}
                            followToggle={this.props.followToggle}
                            users={this.props.users}
                            toggleIsFetching={this.props.toggleIsFetching}
                            isFollowInProgressArr={this.props.isFollowInProgressArr}
                            followInProgress={this.props.followInProgress}
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


export default connect(mapStateToProps, {
    followToggle, setUsers, changeCurrentPage,
    setTotalUsersCount, toggleIsFetching, followInProgress
})(UsersAPI);