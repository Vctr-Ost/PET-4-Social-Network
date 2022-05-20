import {addMessage, updateMessageText} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";

const RedirectOnAuth = AuthRedirect(Dialogs)

function mapStateToProps(state) {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messagesData: state.messagesPage.messagesData,
        dialogsData: state.messagesPage.dialogsData,
        isAuth: state.auth.isAuth,
    }
}

const DialogsContainer = connect(mapStateToProps, {
    addMessage, updateMessageText, })(RedirectOnAuth);

export default DialogsContainer;