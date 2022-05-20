import style from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from 'react'


function Dialogs(props) {
    let dialogElements = props.dialogsData.map(dialog => <DialogItem state={dialog} /> )
    let messagesElements = props.messagesData.map(message => <Message state={message} /> )

    let taRef = React.createRef();

    function addMessage() {
        props.addMessage();
    }
    function updateMessageText() {
        let text = taRef.current.value;
        props.updateMessageText(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                <div className={style.header}>
                    DIALOGS
                </div>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={updateMessageText} ref={taRef} value={props.newMessageText} ></textarea>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
















//
// import style from './Dialogs.module.css'
// import Message from "./Message/Message";
// import DialogItem from "./DialogItem/DialogItem";
// import React from 'react'
//
//
// function Dialogs(props) {
//     debugger;
//     let dialogElements = props.redux.dialogsData.map(dialog => <DialogItem redux={dialog} /> )
//     let messagesElements = props.redux.messagesData.map(message => <Message redux={message} /> )
//
//     let taRef = React.createRef();
//     function alertText() {
//         let text = taRef.current.value;
//         alert(text);
//     }
//
//     return (
//         <div className={style.dialogs}>
//             <div className={style.dialogsList}>
//                 <div className={style.header}>
//                     DIALOGS
//                 </div>
//                 {dialogElements}
//             </div>
//             <div className={style.messages}>
//                 {messagesElements}
//                 <div>
//                     <textarea ref={taRef}></textarea>
//                     <button onClick={alertText}>Send</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Dialogs;