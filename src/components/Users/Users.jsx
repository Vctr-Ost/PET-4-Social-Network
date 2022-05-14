import React from "react";
import style from './Users.module.css';
import axios from "axios";
import profileImg from '../../assets/images/profile_image.jpg'

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return (
            <div className={style.usersBlock}>
                {
                    this.props.users.map(user => {
                        return (
                            <>
                                <div>
                                    <img className={style.userPhoto}
                                         src={(user.photos.small !== null) ? user.photos.small : profileImg}
                                         alt='userPhoto'/>
                                    <button onClick={() => {
                                        this.props.followToggle(user.id)
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
        );
    }
}

export default Users;