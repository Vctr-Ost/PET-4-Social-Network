import style from './ProfileInfo.module.css'
import userNonPhoto from '../../../assets/images/profile_image.jpg'

function ProfileInfo(props) {
    return (
        <>
            <div>
                <img className={style.headImg} src='https://wallpapercave.com/wp/wp6980736.jpg' alt='content image'/>
            </div>
            <div className={style.profInfo}>
                <div className={style.avatar}>
                    <img className={style.avatarImg} src={props.currentProfile.photos.large ? props.currentProfile.photos.large : userNonPhoto} alt='avatar'/>
                </div>
                <div>
                    <div className={style.name}>
                        {props.currentProfile.fullName}
                    </div>
                    <div className={style.info}>
                        <div className={style.item}>Status: {props.currentProfile.aboutMe === null
                            ? "I haven't status" : props.currentProfile.aboutMe}</div>
                        <div className={style.item}>Loocking for a job: {props.currentProfile.lookingForAJobDescription === null
                            ? "I don't want to work" : props.currentProfile.lookingForAJobDescription}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileInfo;

// function ProfileInfo(props) {
//     debugger
//     return (
//         <>
//             <div>
//                 <img className={style.headImg} src='https://wallpapercave.com/wp/wp6980736.jpg' alt='content image'/>
//             </div>
//             <div className={style.profInfo}>
//                 <div className={style.avatar}>
//                     <img className={style.avatarImg} src='https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg' alt='avatar'/>
//                 </div>
//                 <div>
//                     <div className={style.name}>
//                         Viktor Ostapenko
//                     </div>
//                     <div className={style.info}>
//                         <div className={style.item}>Date of birth: 06 May</div>
//                         <div className={style.item}>City: Kyiv</div>
//                         <div className={style.item}>Education: NULES</div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }