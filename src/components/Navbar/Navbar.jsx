import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar(props) {
	return (
		<nav className={style.nav}>
			<div><NavLink className={style.item} to='/profile/2'>Profile</NavLink></div>
			<div><NavLink className={style.item} to='/dialogs'>Messages</NavLink></div>
			<div><NavLink className={style.item} to='/news'>News</NavLink></div>
			<div><NavLink className={style.item} to='/music'>Music</NavLink></div>
			<div><NavLink className={style.item} to='/settings'>Settings</NavLink></div>
			<div className={style.friendsMenu}>
				<NavLink className={style.item + ' ' + style.friendsMenuItem} to='/friends'>Friends</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;