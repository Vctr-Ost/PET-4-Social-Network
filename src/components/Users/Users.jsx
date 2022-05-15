import style from "./Users.module.css";
import profileImg from "../../assets/images/profile_image.jpg";
import React from "react";


function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.usersCount);
    let pagesCountArr = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesCountArr.push(i);
    }

    return (
        <div className={style.usersBlock}>
            <div>
                {pagesCountArr.map(num => {
                    return <span
                        className={(num === props.currentPage) ? style.selected : style.nonSelected}
                        onClick={() => {
                            props.pagesCountOnClick(num)
                        }}>{num}</span>
                })}
            </div>

            {
                props.users.map(user => {
                    return (
                        <>
                            <div>
                                <img className={style.userPhoto}
                                     src={(user.photos.small !== null) ? user.photos.small : profileImg}
                                     alt='userPhoto'/>
                                <button onClick={() => {
                                    props.followToggle(user.id)
                                }}> {user.followed === true ? 'Unfollow' : 'Follow'} </button>
                            </div>
                            <div>
                                <div>
                                    <div>{user.name}</div>
                                    <div>{'user.status'}</div>
                                </div>
                                <div>
                                    <div>{'user.location.country'}</div>
                                    <div>{'user.location.city'}</div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Users;