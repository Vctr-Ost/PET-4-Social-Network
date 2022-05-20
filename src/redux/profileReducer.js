import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_CURRENT_PROFILE = 'UPDATE_CURRENT_PROFILE';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

let initialState = {
    myPostsData: [
        {id: 1, text: 'Hello, WORLD!!', likeCount: 24},
        {id: 2, text: 'I am DROOON', likeCount: 12},
        {id: 3, text: 'YAmakasi!!!', likeCount: 2},
        {id: 4, text: 'KOKOJAMBO - KOKOJAMBO', likeCount: 56},
    ],
    newPostText: '',
    currentProfile: null,
    userStatus: null,
};

function profileReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                myPostsData: [...state.myPostsData, newPost],
                newPostText: '',
            };
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.text,
            };
        case UPDATE_CURRENT_PROFILE:
            return {
                ...state,
                currentProfile: action.profile,
            };
        case UPDATE_USER_STATUS:
            return {
                ...state,
                userStatus: action.status,
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, text: text});
export const updateCurrentProfile = (profile) => ({type: UPDATE_CURRENT_PROFILE, profile});
export const updateUserStatus = (status) => ({type: UPDATE_USER_STATUS, status});


export const profileUpdate = (userId) => (dispatch) => {
    dispatch(updateCurrentProfile(null));
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(updateCurrentProfile(data));
        })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(updateUserStatus(data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) dispatch(updateUserStatus(status))
        })
}

export default profileReducer;