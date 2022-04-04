import React, { useState } from 'react';
import axios from 'axios';
import { ImSpinner9 } from 'react-icons/im'
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import style from './Login.module.css';



const Login = (props) => {

    let navigate = useNavigate();
    let [error, setError] = useState('');
    let [loading, setLoading] = useState(false);
    let [errorList, setErrorList] = useState([]);

    let [user, setUser] = useState({ email: '', password: '' });

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

            let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signin`, user);
            if (data.message === 'success') {

                localStorage.setItem('userToken', data.token);
                props.getUserData();
                navigate('/home');
                setLoading(false);
                toast.success("Willkommen");

            }
            else {
                setError(data.message);
                setLoading(false);
            }
        }
    };

    function validationRegisterForm() {

        let scheme = Joi.object({
            email: Joi.string().email({ tlds: { allow: ['com', 'org', 'net'] } }).required(),
            password: Joi.string().pattern(new RegExp('^[A-Z][a-z0-9]{3,30}$'))
        })
        return scheme.validate(user, { abortEarly: false });
    };

    return (
        <div className='container bg-gradient w-75 my-5'>
            <div className={`m-auto ${style.loginCard}`}>
                <h1>Login Now</h1>

                <form onSubmit={formSubmit}>

                    {/* error from api */}
                    {error ? <div className="alert alret-danger">{error}</div> : ''}

                    {/* ErrorList from input value */}
                    {errorList.map((error, index) =>
                        index === 1 ? <div className="alert alert-danger p-2">Please enter a correct password</div> :
                            <div className="alert alert-danger p-2">{error.message}</div>
                    )}

                    <div>
                        <label htmlFor="email"></label>
                        <input onChange={getUser} className='form-control' type="text" placeholder='Your email address' name='email' />
                    </div>

                    <div>
                        <label htmlFor="password"></label>
                        <input onChange={getUser} className='form-control' type="password" placeholder='Password' name='password' />
                    </div>

                    <div className="text-center">
                        <button className='btn btn-primary my-4'>
                            {loading ? <div> <ImSpinner9 className='fa-spin fs-3' /></div> : 'Login'}
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Login;
