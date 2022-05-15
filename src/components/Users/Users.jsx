import React from "react";
import style from './Users.module.css';
import axios from "axios";
import profileImg from '../../assets/images/profile_image.jpg'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCount}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    pagesCountOnClick = (num) => {
        this.props.changeCurrentPage(num);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCount}&page=${num}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }


    // BTN = () => {
    //     alert(this.props.currentPage + ' - ' + this.props.totalUsersCount + ' - ' + this.props.usersCount)
    //     console.log(this.props.users);
    // }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.usersCount);
        let pagesCountArr = [];
        for (let i = 1; i <= pagesCount; i++) {
            pagesCountArr.push(i);
        }

        return (
            <div className={style.usersBlock}>

                {/*<button onClick={this.BTN}>FFF</button>*/}

                <div>
                    {pagesCountArr.map(num => {
                        return <span
                            className={(num === this.props.currentPage) ? style.selected : style.nonSelected}
                            onClick={() => {
                                this.pagesCountOnClick(num)
                            }}>{num}</span>
                    })}
                </div>

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