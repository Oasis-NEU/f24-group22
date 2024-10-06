import button from './components/login-signup-btn'


function loginSignUpPage() {
    return(
        <>
            <h1>Login or Sign Up</h1>
            <button text='Login' type='login' />
            <button text='Sign Up' type='signup' />
        </>
    )
}

export default loginSignUpPage;