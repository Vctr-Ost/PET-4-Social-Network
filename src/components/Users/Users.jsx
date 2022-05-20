import style from "./Users.module.css";
import profileImg from "../../assets/images/profile_image.jpg";
import React from "react";
import {NavLink} from "react-router-dom";


function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.usersCount);
    let pagesCountArr = [];
    for (let i = 1; i <= pagesCount; i++) {
        i === 10 ? i = pagesCount - 5 : pagesCountArr.push(i);
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
                                <NavLink to={'/profile/' + user.id}>
                                    <img className={style.userPhoto}
                                         src={(user.photos.small !== null) ? user.photos.small : profileImg}
                                         alt='userPhoto'/>
                                </NavLink>
                                {user.followed
                                    ? <button
                                        disabled={props.isFollowInProgressArr.includes(user.id)}
                                        onClick={() => { props.unfollow(user.id) }
                                    }>Unfollow</button>
                                    : <button
                                        disabled={props.isFollowInProgressArr.includes(user.id)}
                                        onClick={() => {props.follow(user.id)
                                        }}>Follow</button>}

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