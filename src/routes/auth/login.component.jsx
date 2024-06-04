import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const Login = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

        console.log(userDocRef);
    }

    return (
        <div className="c-login">
            <h1 className="title">Login</h1>
            <button className="c-button" onClick={logGoogleUser}>Login with Google</button>
        </div>
    );
}

export default Login;