import Form from './Form';
import LoginPicture from './LoginPicture';

function Login(){
  return (
    <>
      <div className="container">
        
        <h1>Inicio de sesión</h1>
        <LoginPicture/>
        <Form />
      </div>
    </>
  );
}

export default Login;


