import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'
import SignInForm from "../../components/auth/signin-form.component";
import { Link, redirect } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { useContext } from 'react';

const Login = () => {

    const { setCurrentUser } = useContext(UserContext);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        setCurrentUser(userDocRef);

        redirect("/")
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
                <Link to="/register"> Create an account</Link>
            </div>
            </div>
        </>
    );
}

export default Login;