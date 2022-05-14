import React from 'react'
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// function DialogsContainer(props) {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     function addMessage() {
//                         store.dispatch(addMessageActionCreator());
//                     }
//                     function updateMessageText(text) {
//                         store.dispatch(updateMessageTextActionCreator(text))
//                     }
//
//                     return (
//                         <Dialogs
//                             addMessage={addMessage}
//                             updateMessageText={updateMessageText}
//                             newMessageText={store.getState().messagesPage.newMessageText}
//                             messagesData={store.getState().messagesPage.messagesData}
//                             dialogsData={store.getState().messagesPage.dialogsData}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }


function mapStateToProps(state) {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messagesData: state.messagesPage.messagesData,
        dialogsData: state.messagesPage.dialogsData,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;