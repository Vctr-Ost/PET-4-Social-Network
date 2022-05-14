import style from './Users.module.css';
import axios from "axios";
import profileImg from '../../assets/images/profile_image.jpg'

function Users(props) {
    // debugger;
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            // debugger;
            props.setUsers(response.data.items);
        })


        // props.setUsers(
        //     [
        //         { id: 1, photoUrl: 'https://images.genius.com/0d821195b5a8d0a775477ca24ee591ab.552x552x1.jpg',
        //             followed: false, fullName: 'Anton', status: 'I am a big boss', location: { city: 'Kyiv', country: 'Ukraine' } },
        //         { id: 2, photoUrl: 'https://images.genius.com/0d821195b5a8d0a775477ca24ee591ab.552x552x1.jpg',
        //             followed: true, fullName: 'Andrew', status: 'I am a big boss too', location: { city: 'Cherkasy', country: 'Ukraine' } },
        //         { id: 3, photoUrl: 'https://images.genius.com/0d821195b5a8d0a775477ca24ee591ab.552x552x1.jpg',
        //             followed: false, fullName: 'Dimych', status: 'I am a big boss too', location: { city: 'Lviv', country: 'Ukraine' } },
        //     ]
        // );
    }

    return (
        <div className={style.usersBlock}>
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