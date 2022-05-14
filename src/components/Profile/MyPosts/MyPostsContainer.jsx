import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";


function mapStateToProps (state) {
    return {
        posts: state.profilePage.myPostsData,
        newPostText: state.profilePage.newPostText,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addPost: () => {
            return dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            let action = updatePostTextActionCreator(text);
            return dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;