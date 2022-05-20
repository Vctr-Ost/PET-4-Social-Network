import {usersAPI} from "../api/api";

const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOW_IN_PROGRESS = 'FOLLOW_IN_PROGRESS';

let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 20,
    usersCount: 10,
    isFetching: false,
    followInProgressArr: [],
};

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW_TOGGLE:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        let newUser = {...user};
                        newUser.followed = action.boolean;
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case FOLLOW_IN_PROGRESS:
                return {
                    ...state,
                    followInProgressArr: action.boolean
                        ? [...state.followInProgressArr, action.userID]
                        : state.followInProgressArr.filter(id => id !== action.userID),
                }
        default:
            return state;
    }
}


export const followToggle = (userID, boolean) => ({type: FOLLOW_TOGGLE, userID, boolean});
export const setUsers = (users) => ({type: SET_USERS, users});
export const changeCurrentPage = (page) => ({type: CHANGE_CURRENT_PAGE, page});
export const setTotalUsersCount = (num) => ({type: SET_TOTAL_USERS_COUNT, num});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const followInProgress = (boolean, userID) => ({type: FOLLOW_IN_PROGRESS, boolean, userID});


export const getUsers = (usersCount, currentPage) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(usersCount, currentPage)
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
}
export const follow = (userId) => (dispatch) => {
    dispatch(followInProgress(true, userId))
    usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followToggle(userId, true))
            }
            dispatch(followInProgress(false, userId))
        })
}
export  const unfollow = (userId) => (dispatch) => {
    dispatch(followInProgress(true, userId))
    usersAPI.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followToggle(userId, false))
            }
            dispatch(followInProgress(false, userId))
        })
}


export default usersReducer;