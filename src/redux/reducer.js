import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const favorites = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        
            case REMOVE_FAV:
                return {
                  ...state,
                  myFavorites: state.myFavorites.filter(favorite => favorite.id !== Number(action.payload))
            }
            case FILTER:
                return{
                    ...state, 
                    myFavorites: state.allCharacters.filter(favorite => favorite.gender !== action.payload)
            }
            case ORDER:
                const copyAllCharacters = [...state.allCharacters]
                return{
                    ...state,
                    myFavorites:
                    action.payload === 'A'
                    ? copyAllCharacters.sort((a, b) => a.id - b.id)
                    : copyAllCharacters.sort((a, b) => b.id - a.id)
                }

        default: 
            return { ...state };
    }
}


export default favorites;