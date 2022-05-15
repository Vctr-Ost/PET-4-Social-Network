import {connect} from "react-redux";
import {changeCurrentPage, followToggle, setTotalUsersCount, setUsers} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";


class UsersAPI extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCount}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    pagesCountOnClick = (num) => {
        this.props.changeCurrentPage(num);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCount}&page=${num}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    render() {
        return <Users currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      usersCount={this.props.usersCount}
                      pagesCountOnClick={this.pagesCountOnClick}
                      followToggle={this.props.followToggle}
                      users={this.props.users}
        />
    }
}

function mapStateToProps (state) {
    // debugger;
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersCount: state.usersPage.usersCount,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        followToggle: (ID) => {
            dispatch( followToggle(ID) );
        },
        setUsers: (users) => {
            dispatch( setUsers(users) );
        },
        changeCurrentPage: (num) => {
            dispatch( changeCurrentPage(num) );
        },
        setTotalUsersCount: (num) => {
            dispatch ( setTotalUsersCount(num) );
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;