import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from './Nav.module.css'

const Nav = ({onSearch}) => {

   return (
      <nav className={style.navInput}>
         <button className={style.logOut}>
         <Link classname={style.color} to={'/'}>LogOut</Link>   
         </button>

        <SearchBar onSearch={onSearch} />
        <button className={style.about}>
         <Link to='/about'>About</Link>
        </button>

        <button className={style.home}>
         <Link to='/home'>Home</Link>
        </button>

        <button>
         <Link to='/favorites'>Favorites</Link>
        </button>
      </nav>
   )
}

export default Nav