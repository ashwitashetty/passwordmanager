import React from 'react'
import { Link } from 'react-router-dom'
import FilledButton from '../components/FilledButton'
import PrimaryButton from '../components/PrimaryButton'
import "../styles/Homepage.css"

const SignIn = () => {
  return (
    <div className="rectangle-body">
    <div className="upper-body">
      <span className="sign-in-heading">SIGN IN TO YOUR ACCOUNT</span>
      <PrimaryButton placeholder="Mobile Number" />
      <PrimaryButton placeholder="MPin" />
    </div>
    <div className="lower-body">
      <span className="forgot-password">Forgot your password?</span>
      <FilledButton buttonText="SIGN IN"/>
      <Link to='/Signup' className="no-account">Don’t have a Account? SIGNUP</Link>
    </div>
  </div>
  )
}

export default SignIn