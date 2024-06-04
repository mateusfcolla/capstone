import { useState } from 'react';
import { signInUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            await signInUserWithEmailAndPassword(email, password);
            setFormFields(defaultFormFields);
            alert("User signed in successfully")
        } catch(e) {
            switch(e.code) {
                case 'auth/user-not-found':
                    alert("User not found, check your email and password");
                    break;
                case 'auth/wrong-password':
                    alert("Wrong password, check your email and password");
                    break;
                default:
                    alert("Something went wrong, try again later...");
                    break;
            }
            console.log("Error signing in user: ", e.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                label="Email"
                type="email"
                required
                onChange={handleChange}
                name="email"
                value={email}
            />
            <FormInput
                label="Password"
                type="password"
                required
                onChange={handleChange}
                name="password"
                value={password}
            />
            <button className="c-button primary" >Login</button>
        </form>
    )
}

export default SignInForm