
import './login.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userData } from '../userSlice';


const login = () => {

  const [credentials, setCredentials]= useState({email:'', password:''});
  const [msgError, setMsgError] = useState("");

  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  const credenciales = useSelector(userData);
  
  const updateCredentials = (e) => {
    setCredentials(
      {
        ...credentials, 
        [e.target.name]: e.target.value
      })
}    

const logIn = () => {

  setMsgError("");

  dispatch(
    loginUser({
      email: credentials.email,
      password: credentials.password,
    })
  );

  setTimeout(() => {
    navigate("/");
  }, 1000);
};
    
  return (
    <div className="login">
      <div className="loginDesign">
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={updateCredentials}
          lenght="30"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={updateCredentials}
          lenght="30"
        />
        <div className="button" onClick={() => logIn()}>
          Login
        </div>
        <div>{msgError}</div>
      </div>
    </div>
  );
}

export default login