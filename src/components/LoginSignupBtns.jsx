import { Link } from "react-router-dom";
import '../assets/styles/LoginSignup.css'

function LoginSignupButton({text, type}) {
    let buttonClass = type === 'login' ? 'login-btn btn btn-outline-primary' : 'signup-btn btn btn-primary';

    return (
        <Link to={type === 'login' ? '/login' : '/signup'}>
            <button className={buttonClass}>{text}</button>
        </Link>
    )
}

function LoginSignup() {
    return(
        <>
            <LoginSignupButton text='Login' type='login' />
            <LoginSignupButton text='Sign Up' type='signup' />
        </>
    )
}

export default LoginSignup;