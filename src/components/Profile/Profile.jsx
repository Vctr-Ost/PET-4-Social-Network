import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";



function Profile() {

    return (
        <div className={style.content}>
            <div>
                <img src='https://wallpapercave.com/wp/wp6980736.jpg' alt='content image'/>
            </div>

            <div className={style.info}>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        </div>
    );
}

export default Profile;