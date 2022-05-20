const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Ivan', imgSrc: 'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg'},
        {
            id: 2,
            name: 'Kolya',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIhQnV6bbT4Bx14lw7d07mUiFcEvHk38k-g&usqp=CAU'
        },
        {
            id: 3,
            name: 'Valera',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsksF1xU0Wdhzy07jZvTWGbWJwtyHDev3DgQ&usqp=CAU'
        },
        {
            id: 4,
            name: 'Dimka',
            imgSrc: 'https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg'
        },
    ],
    messagesData: [         // abonent: 1-me ; 0-notMe
        {
            id: 1,
            message: 'YO',
            abonent: 1,
            imgSrc: 'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg'
        },
        {
            id: 2,
            message: 'I`m fine. And u ?',
            abonent: 0,
            imgSrc: 'https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg'
        },
        {
            id: 3,
            message: 'How are you ?',
            abonent: 1,
            imgSrc: 'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg'
        },
        {
            id: 4,
            message: 'Hello !',
            abonent: 1,
            imgSrc: 'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg'
        },
    ],
    newMessageText: '',
};

function messageReducer(state = initialState, action) {

    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                id: 5,
                message: state.newMessageText,
                abonent: 1,
                imgSrc: 'https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg',
            }
            return {
                ...state,
                messagesData: [...state.messagesData, message],
                newMessageText: '',
            };
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text,
            };
        default: return state;
    }
}

export function updateMessageText(message) {
    return {type: UPDATE_MESSAGE_TEXT, text: message};
}

export function addMessage(message) {
    return {type: SEND_MESSAGE}
}

export default messageReducer;