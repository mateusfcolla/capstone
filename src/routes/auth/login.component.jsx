import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'
import SignInForm from "../../components/auth/signin-form.component";
import { Link } from 'react-router-dom';

const Login = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }

    return (
        <>
            <div className="c-auth-form">
                <h1 className="title">Login</h1>
                <SignInForm />
                <div className="c-advice" style={{textAlign: 'center'}} >or</div>
                <button className="c-button" style={{width: '100%'}} onClick={logGoogleUser}>Login with Google</button>
            <div className="c-advice" >
                Dont have an account?
                <Link to="/register"> Register here</Link>
            </div>
            </div>
        </>
    );
}

export default Login;