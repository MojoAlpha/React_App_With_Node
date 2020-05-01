import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {signin, authenticate, isAuthenticated} from '../auth/helper/index';
import {ReactComponent as ReactLogo} from './logo3.svg';


const Signin = () => {

  require('./SignIn.css')
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    didRedirect: false
  });
  const {email, password, error, loading, didRedirect} = values;
  const {user} = isAuthenticated();

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value});
  }

  const onSubmit = event => {
    event.preventDefault();
    setValues({...values, error: false, loading: true})
    signin({email, password})
    .then(data =>{
      if(data.error){
        setValues({...values, error: data.error, loading: false})
      }else{
        redirectDelay();
        authenticate(data, () => {
          setValues({
            ...values,
            didRedirect: true
          })
        })
      }
    })
  }

  const redirectDelay =() =>{
    setTimeout(() => {
      setValues({...values, didRedirect: true});
  },2000)
  }

  const performRedirect = () => {
    if(didRedirect){
      if(user && user.role ===1) {
        return <Redirect to='/admin/dashboard' />
      }else{
        return <Redirect to='/user/dashboard' />
      }
    }
    if(isAuthenticated()){
      return <Redirect to='/' />
    }
  }

  const successMessage = () => {
    return(
      <div style={{'display':'flex'}}>
    <div className='suc' style={{display: loading ? 'flex' : 'none'}}>
    Logged In SuccessFully!!
    </div>
    </div>
    )
  }


  const errorMessage = () => {
    return(
      <div style={{display: 'flex'}}>
      <div className='err' style={{display: error ? 'flex' : 'none'}}>
      {error}
      </div>
      </div>
    )
  }

    const signInForm = () => {
        return(
            <div>
            <div className="container">
            <ReactLogo className='top' />
            <h1>Login To Odrio Account</h1>
            <p>
                One Account To Personalise Your Best Experience With Us 
            </p>
            <a href="/learn">Learn More</a>
            {errorMessage()}
            {successMessage()}
            <div>
                <h3 style={{'marginTop': '1vw', 'marginBottom': '0.5vw', 'fontSize': '1.2vw'}}>Email : </h3><input type="email" onChange={handleChange('email')} value={email} placeholder="&nbsp;Email" required className="info" />
                <h3 style={{'margin-top': '1vw', 'margin-bottom': '0.5vw', 'font-size': '1.2vw'}}>Password : </h3><input type="password" onChange={handleChange('password')} value={password} placeholder=" * * * * * * * *" style={{'letterSpacing': '0.2vw', 'fontWeight': '900'}} required className="info pass-dot" />
                <img src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt='Lock' className="pass" /><br />
                <input type="Submit" onClick={onSubmit} value="Login" className="login-btn" />
                <p style={{'marginTop': '1vw', 'fontWeight': '600'}}>New To <span style={{'color': '#4C5355'}}>ODRIO</span> ? <a href="/signup">SignUp</a></p>
            </div>
        </div>
            </div>
        )
    }


    return(
      <div>
          {signInForm()}
          {performRedirect()}
      </div>
    )
}

export default Signin;