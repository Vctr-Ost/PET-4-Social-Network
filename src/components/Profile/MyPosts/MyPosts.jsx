import style from './MyPosts.module.css'
import Post from './Post/Post';
import React from "react";


function MyPosts(props) {

    let showPost = props.posts.map(post => <Post
            text={post.text}
            likeCount={post.likeCount}
        />)

    let taRef = React.createRef();
    function addPost() {
        props.addPost();
    }
    function updateText() {
        let text = taRef.current.value;
        props.updateNewPostText(text) ;
    }

    return (
        <div className={`${style.fz} ${style.col}`}>
            <div className={style.header}>My posts</div>

            <div>
                <textarea onChange={ updateText } ref={taRef} value={props.newPostText} />
            </div>
            <div>
                <button onClick={ addPost } >Add Post</button>
            </div>


            {showPost}
        </div>
    )
}


export default MyPosts;