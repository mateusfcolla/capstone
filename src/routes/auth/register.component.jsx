import SignUpForm from "../../components/auth/signup-form.component";
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div className="c-auth-form">
            <h1>Register with email and password</h1>
            <SignUpForm />
            <div className="c-advice">
                Already have an account?
                <Link to="/login"> Login here</Link>
            </div>
        </div>
    );
}

export default Register;