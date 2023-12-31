import Appicon from "../assets/App Icon.svg";
const Login = () => {
  return (
    <div className="login-panel">
      <form className="login-form">
        <div className="login-content">
          <div>
            <img src={Appicon} width={81} height={70} alt="App icon" />
          </div>
          <h1 className="login-title">Echo</h1>

          <div className="form-group">
            <p>Login</p>
            <input type="email" placeholder="Email" className="email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="submit-btn">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
