import style from "./Users.module.css";
import profileImg from "../../assets/images/profile_image.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";


function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.usersCount);
    let pagesCountArr = [];
    for (let i = 1; i <= pagesCount; i++) {
        i === 10 ? i = pagesCount - 5 : pagesCountArr.push(i);
    }
    // debugger
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
                    // debugger
                    return (
                        <>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img className={style.userPhoto}
                                         src={(user.photos.small !== null) ? user.photos.small : profileImg}
                                         alt='userPhoto'/>
                                </NavLink>
                                {user.followed
                                    ? <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                            withCredentials: true,
                                            headers: { "API-KEY": "dc4dfe60-ebd0-45d4-9366-6739241bde8b" }
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.followToggle(user.id, false)
                                            }
                                            console.log('unfollow')
                                            console.log(response)
                                        })

                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: { "API-KEY": "dc4dfe60-ebd0-45d4-9366-6739241bde8b" }
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.followToggle(user.id, true)
                                            }
                                            console.log('follow')
                                            console.log(response)
                                        })

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