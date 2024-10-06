function button({text, type}) {
    buttonClass = type === 'login' ? 'login-btn' : 'signup-btn'

    return (
        <button className={buttonClass}>{text}</button>
    )
}

export default button;