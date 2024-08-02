import React from 'react'
import MainButtons from './Buttons/MainButtons'
import EmailInputs from './InputsFields/EmailInputs'
import PasswordInput from './InputsFields/PasswordInput'
// import '../App.css';

function Login() {
    return (
        <>
        <div className='col-6 second-row brder'>
        <h2 className='text-center mt-5'> Login</h2>
        <hr/>
        <div className="rounded border p-3 ms-md-auto mt">
        
        <form>
            <EmailInputs />
            <PasswordInput />
            <MainButtons label={'Login'} />
        </form>
        </div>
          </div>
          </>
    )
}

export default Login
