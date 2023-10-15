import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='page'>

      <div className='mycard'>

        <h3 className='form-title'>Log into your Account</h3>

        <form>

          <label>Email</label>
          <input className='myinput' type="email" />

          <label>Password</label>
          <input className='myinput' type="password" />

          <button className='mybtn'>Submit</button>

          <Link className='link' to='/register'>Don't have an account?</Link>

        </form>

      </div>

    </div>
  )
}

export default Login