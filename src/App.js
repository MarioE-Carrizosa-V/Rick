import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Card from './components/Card/Card';
import Form from './components/Form/Form';
import style from './components/Nav/Nav.module.css'
import Favorites from './components/Favorites/Favorites'



function App() {
   const [characters, setCharacters] = useState([])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose (id) {
      const filtered = characters.filter(character => character.id !== Number(id))
         setCharacters(filtered)
   }
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   let EMAIL = 'carrizosa21@mail.com'
   let PASSWORD = 'homura21'

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD){
      setAccess(true);
      navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         {useLocation().pathname !== '/' && <Nav onSearch={onSearch}/>}
            <Routes>
               <Route path='/' element={<Form login={login}/>} />
               <Route className={style.color} path='./home' element={<Card/>} />
               <Route path='/about' element={<About/>} />
               <Route path='/detail/:id' element={<Detail/>} />
               <Route path='/favorites' element={<Favorites/>} />
            </Routes>
         <Cards characters={characters} onClose={onClose}/>
         
      </div>
   );
}

export default App;
