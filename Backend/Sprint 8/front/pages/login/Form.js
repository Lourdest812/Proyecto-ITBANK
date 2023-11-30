import { useState } from "react";
import Button from "../../components/Button";
import { FaUser, FaLock } from 'react-icons/fa';
import { useRouter } from 'next/router'; // Usamos useRouter en lugar de useNavigate

function Form() {
    const router = useRouter(); // Usamos useRouter para la navegación

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleClick = () => {
      router.push('./register'); // Usamos router.push para la navegación en Next.js
    };


    const handleSubmit = async (event) => {
      event.preventDefault();
      const errors = validate();
      setErrors(errors);
      console.log(Object.keys(errors).length);
      
      const userData = await getUser()

      console.log(userData);
      if (Object.keys(errors).length === 0 && userData) {
        alert('Ingreso exitoso');
        console.log('Ingreso exitoso');
        sessionStorage.setItem('userData', JSON.stringify(userData))
        router.push('./main'); // Usamos router.push para la navegación en Next.js
      }
    };

    const validate = () => {
      const error = {};

      if(!user){
        error.user = "Ingrese su nombre de usuario";
        console.log("Ingrese su nombre de usuario");
      }

      if (!password) {
        error.password = "Ingrese su contraseña";
        console.log("Ingrese su contraseña");
      }

      console.log('Validation logic executed');
      return error;
    };


    const getUser = async () => {
      const loginData = {
        username: user,
        password: password,
      };
      
      try {
        const userResponse = await fetch('http://localhost:8000/api/auth/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        })
        const userData = await userResponse.json()
        return userData
      } catch (error) {
        console.error(error)
      }
    }

    return (
      <div className="container">
        <form
          id="login-form"
          action="./test.js"
          name="login-form"
          method="POST"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
        <div className="login-form-group">
          <label htmlFor="user">
            <FaUser className="icon"/>
            <input
              type="text"
              name="user"
              id="user"
              className="login-form-control"
              placeholder="Usuario"
              onChange={(e) => setUser(e.target.value)}
            />
            {errors.user && <div className="error">{errors.user}</div>}
          </label>
        </div>
          <div className="login-form-group">
            <label htmlFor="password">
              <FaLock className="icon" />
              <input
                type="password"
                name="password"
                id="password"
                className="login-form-control"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <div className="error">{errors.password}</div>}
            </label>
          </div>
          <div className="olvido">
            <a href="./register"><p>¿Olvidaste tu contraseña?</p></a>
          </div>
          <Button type="submit" action="Ingresar"></Button>
          <div className="register">
            <p>¿No tenés cuenta?</p>
            <div className="button-class">
              <a><button className="button" onClick={handleClick}>Registrate</button></a>
            </div>
          </div>
        </form>
      </div>
    );
}

export default Form;
