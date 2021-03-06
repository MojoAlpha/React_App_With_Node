import React, {useState} from 'react';
import {signup} from '../auth/helper/index'
import {ReactComponent as ReactLogo} from './logo3.svg';

const Signup = () => {

  require('./StyleUp.css')

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirm_pass: '',
    error: '',
    success: false
  });
  
  const {name, email, password, confirm_pass, error, success} = values

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value});
  }

  const onSubmit = event => {
    event.preventDefault();
    setValues({...values, error: false})
    if(confirm_pass !== password)
    {
      setValues({...values, error: 'Passwords Do Not Match!!', success: false})
    }else{
    signup({name, email, password})
    .then(data => {
      if(data.error){
        setValues({...values, error: data.error, success: false})
      }
      else{
        setValues({...values, name:'',email:'',password:'', confirm_pass: '', error:'',success:true})
      }
    }
    )
    .then(console.log('Error in SignUp!!'))
  }
  }
    const signUpForm = () => {
        return(
          <div className="container">
          <ReactLogo className='top' />
         <h1>Create An Odrio Account</h1>
        <p>
            One Account To Personalize Your Best Experience With Us 
        </p>
        <a href="/learn">Learn More</a>
        {successMessage()}
        {errorMessage()}
        <div style={{width:'100%'}}>
            <h3 className='fields'>Name : </h3><input type="name" onChange={handleChange('name')} value={name} placeholder="Name" required className="info" />
            <h3 className='fields'>Email : </h3><input type="email" onChange={handleChange('email')} value={email} placeholder="Email" required className="info" />
            <h3 className='fields'>Password : </h3><input type="password" onChange={handleChange('password')} value={password} placeholder=" * * * * * * * *" className='pass-dot info' required />
            <img src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt='Lock' className="pass" /><br />
            <h3 className='fields'>Confirm Password : </h3><input type="password" onChange={handleChange('confirm_pass')} value={confirm_pass} placeholder=" * * * * * * * *" className='pass-dot info' required />
            <img src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt='lock' className="pass" /><br />
            <input type="Submit" value="Create Account" onClick={onSubmit} className="login-btn" />
            <img src="https://img.icons8.com/material-rounded/24/000000/guest-male.png" alt='user' className='user-pic' />
            <p style={{marginBottom:'1em'}}> Surely Check Our <a href="/terms">Terms & Privacy</a> Policy</p>
        </div>
    </div>
        )
    }

    const successMessage = () => {
      return(
        <div style={{'display':'flex'}}>
      <div className='suc' style={{display: success ? 'flex' : 'none'}}>
      New Account was Created SucessFully!!. Please <a className='lo' href='/signin'>Login Here</a>
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

    return(
      <div>
          {signUpForm()}
      </div>
    )
}

export default Signup;