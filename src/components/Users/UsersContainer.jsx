import {connect} from "react-redux";
import Users from "./Users";
import {changeCurrentPage, followToggle, setTotalUsersCount, setUsers} from "../../redux/usersReducer";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;