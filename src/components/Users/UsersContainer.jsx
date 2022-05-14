import {connect} from "react-redux";
import Users from "./Users";
import {followToggle, setUsers} from "../../redux/usersReducer";

function mapStateToProps (state) {
    return {
        users: state.usersPage.users,
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
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;