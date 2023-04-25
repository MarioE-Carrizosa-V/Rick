const Validation = (userData) => {
    let errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = 'Usuario no valido'
        }
    if (!userData.email.length > 35){
        errors.email = 'El correo de usuario no debe tener mas de 35 caracteres'
        }
    if (!userData.email){
        errors.email = 'Este campo no puede estar vacio'
        }
    if (!/.*\d+.*/.test(userData.password)){
        errors.password = 'La contraseña debe tener al menos un numero'
        }
    if (userData.password.length < 6 || userData.password.length > 14){
        errors.password = 'La contraseña debe tener entre 6 y 14 caracteres'
        }
return errors
}

export default Validation 


