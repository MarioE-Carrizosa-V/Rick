import { connect } from "react-redux"
import Card from "../Card/Card"


const Favorites = ({myFavorites}) => {
    return (
        <div >
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        image={fav.image}
                        species={fav.species}
                        gender={fav.gender}
                        onClose={fav.onClose}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {  
    return {
        myFavorites: state.myFavorites        
    }
}

export default connect(mapStateToProps, null)(Favorites)