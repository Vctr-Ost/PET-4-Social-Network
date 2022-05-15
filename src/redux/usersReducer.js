const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'CSET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 20,
    usersCount: 10,
};

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW_TOGGLE:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        let newUser = {...user};
                        if (newUser.followed === true) newUser.followed = false;
                        else if (newUser.followed === false) newUser.followed = true;
                        return newUser;
                    }
                    return user;
                }),
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            }
            // return ((state.users.length > 0) ? state : {...state, users: [...state.users, ...action.users]});
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.num,
            };
        default:
            return state;
    }
}


export function followToggle(ID) {
    return {type: FOLLOW_TOGGLE, userID: ID}
}

export function setUsers(users) {
    return {type: SET_USERS, users}
}
export function changeCurrentPage(page) {
    return {type: CHANGE_CURRENT_PAGE, page}
}
export function setTotalUsersCount(num) {
    return {type: SET_TOTAL_USERS_COUNT, num}
}


export default usersReducer;