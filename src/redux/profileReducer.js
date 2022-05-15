const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_CURRENT_PROFILE = 'UPDATE_CURRENT_PROFILE';

let initialState = {
    myPostsData: [
        { id: 1, text: 'Hello, WORLD!!', likeCount: 24 },
        { id: 2, text: 'I am DROOON', likeCount: 12 },
        { id: 3, text: 'YAmakasi!!!', likeCount: 2 },
        { id: 4, text: 'KOKOJAMBO - KOKOJAMBO', likeCount: 56 },
    ],
    newPostText: '',
    currentProfile: null,
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
        default: return state;
    }
}

export function addPostActionCreator() {
    return { type: ADD_POST };
}
export function updatePostTextActionCreator(text) {
    return { type: UPDATE_POST_TEXT, text: text }
}
export function updateCurrentProfile(profile) {
    return {type: UPDATE_CURRENT_PROFILE, profile}
}

export default profileReducer;