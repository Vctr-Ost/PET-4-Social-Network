import {connect} from "react-redux";
import {
    changeCurrentPage,
    followToggle,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCount}&page=${this.props.currentPage}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    pagesCountOnClick = (num) => {
        this.props.changeCurrentPage(num);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCount}&page=${num}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
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
    }
}


export default connect(mapStateToProps, { followToggle, setUsers,
    changeCurrentPage, setTotalUsersCount, toggleIsFetching, })(UsersAPI);