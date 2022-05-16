import style from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
	return (
		<header className={style.header}>
			<NavLink to='/profile/2'>
             <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Stencyl_logotype.svg/2560px-Stencyl_logotype.svg.png' alt='logo image' />
			</NavLink>
			<span className={style.loginBtn}>{props.isAuth ? 'EXIT' : 'LOGIN'}</span>
		</header>
	);
}

export default Header;