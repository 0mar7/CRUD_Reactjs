import React, { useState } from 'react';
import axios from 'axios';
import { ImSpinner9 } from 'react-icons/im'
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
import style from './Register.module.css';

const Register = () => {

    let navigate = useNavigate();
    let [error, setError] = useState('');
    let [loading, setLoading] = useState(false);
    let [errorList, setErrorList] = useState([]);

    let [user, setUser] = useState({ first_name: '', last_name: '', age: 0, email: '', password: '' });

    function getUser(e) {

        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
        console.log(myUser);
    };

    async function formSubmit(e) {

        e.preventDefault();
        setLoading(true);

        let validationResponse = validationRegisterForm();
        if (validationResponse.error) {
            setErrorList(validationResponse.error.details);
            setLoading(false);
            // error
        }
        else {

            let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signup`, user);
            if (data.message === 'success') {
                navigate('/login');
                setLoading(false);
            }
            else {
                setError(data.message);
                setLoading(false);
            }
        }
    }

    function validationRegisterForm() {

        let scheme = Joi.object({
            first_name: Joi.string().min(3).max(20).required(),
            last_name: Joi.string().min(3).max(20).required(),
            age: Joi.number().min(16).max(80).required(),
            email: Joi.string().email({ tlds: { allow: ['com', 'org', 'net'] } }).required(),
            password: Joi.string().pattern(new RegExp('^[A-Z][a-z0-9]{3,30}$'))
        })
        return scheme.validate(user, { abortEarly: false });
    }

    return (
        <div>
            <div className={`${style.RegisterCard} bg-gradient p-5 mt-3`}>
                <h1>Register Now</h1>

                <form onSubmit={formSubmit}>

                    {/* Error from Api */}
                    {error ? <div className="alert alret-danger">{error}</div> : ''}

                    {/* ErrorList from input value */}
                    {errorList.map((error, index) => index === 4 ? <div className="alert alert-danger p-2">Password Invaild</div> :
                        <div className="alert alert-danger p-2">{error.message}</div>
                    )}

                    <div>
                        <label htmlFor="first_name"></label>
                        <input onChange={getUser} className='form-control' type="text" name="first_name" placeholder='First Name' />
                    </div>
                    
                    <div>
                        <label htmlFor="last_name"></label>
                        <input onChange={getUser} className='form-control' type="text" name="last_name" placeholder='Last Name' />
                    </div>
                    
                    <div>
                        <label htmlFor="age"></label>
                        <input onChange={getUser} className='form-control' type="age" name="age" placeholder='Age' />
                    </div>
                    
                    <div>
                        <label htmlFor="email"></label>
                        <input onChange={getUser} className='form-control' type="email" name="email" placeholder='Your email address' />
                    </div>
                    
                    <div>
                        <label htmlFor="password"></label>
                        <input onChange={getUser} className='form-control' type="password" name="password" placeholder='Password' />
                    </div>
                    
                    <div className="text-center">
                        <button className={`btn btn-primary my-3 mx-auto ${style.button}`}>
                            {loading ? <ImSpinner9 className='fa-spin fs-3' /> : 'Register'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;