import React from 'react'
import MainButtons from './Buttons/MainButtons'
import EmailInputs from './InputsFields/EmailInputs'
import PasswordInput from './InputsFields/PasswordInput'
import TextInput from './InputsFields/TextInput'

function Signup() {
    return (
        <div className='col-lg-6 col-sm-12 second-row'>
            <h2 className='text-center mt-5'> Sign Up</h2>
            <hr />
            <div className=" p-3 mt-3">
                <form>
                    <EmailInputs />
                    <PasswordInput />
                    <PasswordInput passName={'confirm password :'} />
                    <TextInput textName={'phone number :'} />
                    <MainButtons label={'Sign Up'} />
                </form>
            </div>
        </div>
    )
}

export default Signup
