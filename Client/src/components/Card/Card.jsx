import { Link } from "react-router-dom"
import style from "./Card.module.css"
import {connect} from 'react-redux'
import { addFav, removeFav } from "../../redux/actions"
import { useState, useEffect } from "react"

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false)
   
   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         removeFav(id)
      } 
      else {
         setIsFav(true)
         addFav({id, name, status, species, gender, origin, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.cardDisplay}>
      <card className={style.cards}>
        <button className={style.boton} onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
         <h2 className={style.text}>{name}</h2>
         </Link>
         <img src={image} alt='' />
         <h2 className={style.card}>{status}</h2>
         <h2 className={style.card}>{species}</h2>
         <h2 className={style.card}>{gender}</h2>
         <h2 className={style.card}>{origin}</h2>
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
      </card>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
       addFav: (character) => { dispatch(addFav(character)) },
       removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)