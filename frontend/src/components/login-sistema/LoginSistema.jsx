import "../../styles/login-sistema/login.css";

const Login = () => {
  return (
    <div className="login-div">
      <div className="login-box">
        <h1>GM</h1>

        <h2>Iniciar sesion</h2>
        <form className="login-form" action="">
          <input type="text" name="usuario" id="usuario" />
          <input type="password" name="contrasena" id="contrasena" />
          <input className="button" type="button" value="Entrar" />
        </form>
      </div>
    </div>
  );
};

export default Login;
