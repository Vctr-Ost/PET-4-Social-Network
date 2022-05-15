import PreloaderImage from '../../../assets/images/preloader.svg';
import style from './Preloader.module.css'

function Preloader() {
    return <div className={style.imgBlock}> <img className={style.image} src={PreloaderImage} /> </div>
}

export default Preloader;