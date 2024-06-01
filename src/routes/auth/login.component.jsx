import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const Login = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return (
        <div className="c-login">
            <h1 className="title">Login</h1>
            <button className="c-button" onClick={logGoogleUser}>Login with Google</button>
        </div>
    );
}

export default Login;