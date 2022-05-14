import style from './Users.module.css';
import axios from "axios";
import profileImg from '../../assets/images/profile_image.jpg'

function Users(props) {

    function getUsers() {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                // debugger;
                props.setUsers(response.data.items);
            })
        }
    }

    return (
        <div className={style.usersBlock}>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(user => {
                    return (
                        <>
                            <div>
                                <img className={style.userPhoto} src={ (user.photos.small !== null) ? user.photos.small : profileImg } alt='userPhoto'/>
                                <button onClick={ () => { props.followToggle(user.id) } } > { user.followed === true ? 'Unfollow' : 'Follow' } </button>
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

export default Users;