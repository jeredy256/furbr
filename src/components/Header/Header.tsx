import { Link } from "react-router-dom";

import style from './Header.module.css'

const Header = () => {
    return(
        <>
        <header className={style.header_conf}>
            <h1>Ola mundo</h1>
            <button><Link to={"/furbr"}>click</Link></button>

        </header>
        </>
    )
}
export default Header;