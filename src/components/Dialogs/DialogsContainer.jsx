import React from 'react'
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

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