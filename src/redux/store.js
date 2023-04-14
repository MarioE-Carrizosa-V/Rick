import { createStore } from 'redux';
import favorites from './reducer';

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea sirve para conectar nuestra App con la extensión REDUX DEVTOOLS DEL NAVEGADOR


const store = createStore(favorites);



export default store;