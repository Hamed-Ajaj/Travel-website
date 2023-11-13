import '../../App.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import FormContext from '../../context/FormContext';

export default function SignUp() {
    const [state, setState] = useState('');
    const { setUsername, setShowSignUp, setShowInfo} = useContext(FormContext);
    const navigate = useNavigate();
    const handleNavigate = () => {
            navigate('/');
    } 
    const handleChange = (e) => {
        setState(e.target.value);
    };

    const handleSubmit = (e) => {
        setUsername(state);
    };

    return (
        <div className='sign-up'>
            <form className='form-sign-up'>
                <div className="title-container">
                    <h1 className='sign-up-title'>Sign Up</h1>
                </div>
                <div className='inputs'>
                    <input
                        type="text"
                        className='username'
                        name='username'
                        placeholder='Username'
                        value={state}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        className='email'
                        placeholder='e.g: example@gmail.com'
                        name='email'
                        required
                    />
                    <input
                        type="password"
                        className='password'
                        placeholder='Password'
                        name='password'
                        required
                    />
                    <button onClick={() => {handleSubmit(); setShowInfo(true); setShowSignUp(false); handleNavigate()}} className='sign-up-btn'>Sign Up</button>
                </div>
            </form>
        </div>
    );
}
