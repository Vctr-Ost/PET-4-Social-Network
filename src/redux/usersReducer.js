const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';


// let initialState = {
//     users: [
//         { id: 1, photoUrl: 'https://images.genius.com/0d821195b5a8d0a775477ca24ee591ab.552x552x1.jpg',
//             followed: false, fullName: 'Anton', status: 'I am a big boss', location: { city: 'Kyiv', country: 'Ukraine' } },
//         { id: 2, photoUrl: 'https://images.genius.com/0d821195b5a8d0a775477ca24ee591ab.552x552x1.jpg',
//             followed: true, fullName: 'Andrew', status: 'I am a big boss too', location: { city: 'Cherkasy', country: 'Ukraine' } },
//         { id: 3, photoUrl: 'https://images.genius.com/0d821195b5a8d0a775477ca24ee591ab.552x552x1.jpg',
//             followed: false, fullName: 'Dimych', status: 'I am a big boss too', location: { city: 'Lviv', country: 'Ukraine' } },
//     ]
// };

let initialState = {
    users: []
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
            return ((state.users.length > 0)
                ? state 
                : {...state, users: [...state.users, ...action.users]});
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


export default usersReducer;