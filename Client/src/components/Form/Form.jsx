import { useState } from "react"
import style from './Form.module.css'
import Validation from "./validation"


const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState ({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setUserData ({
            ...userData, 
            [event.target.name]: event.target.value
        })
        
        setErrors(Validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }



    return (
        <card className={style.fondo}> 
        <br/> <br/> <br/>
        <form  onSubmit={handleSubmit}>
            <img src="https://i.pinimg.com/originals/29/bd/26/29bd261d201e956588ee777d37d26800.gif" className={style.imagen}/>
            <br/> <br/> <br/> <br/>
            <label htmlFor="email" className={style.form} >Email: </label>
            <input name="email" type="email" placeholder="Ingrese su email" value={userData.email} onChange={handleChange} className={style.input}/>
            {errors.email && <p className={style.advertencia}>{errors.email}</p>}
            <br/> <br/>
            <label htmlFor="password" className={style.form}>Password: </label>
            <input name='password' type='password' value={userData.password} onChange={handleChange} placeholder="Ingrese su password" className={style.input}/>
            {errors.password && <p className={style.advertencia}>{errors.password}</p>}
            <br/> <br/>
            <button className={style.boton}> Submit </button>
        </form>
        </card>
    )
}

export default Form