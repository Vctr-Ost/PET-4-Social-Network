import {addMessage, updateMessageText} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";




function mapStateToProps(state) {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messagesData: state.messagesPage.messagesData,
        dialogsData: state.messagesPage.dialogsData,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, updateMessageText}),
    withAuthRedirect
)(Dialogs)