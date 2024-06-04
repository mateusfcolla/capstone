import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName })
            setFormFields(defaultFormFields);
            alert("User created successfully")
        } catch(e) {
            if(e.code  === 'auth/email-already-in-use') {
                alert("Email already in use!")
            } else {
                alert("Error creating user, try again later...")
            }
            console.log("Error creating user: ", e.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                label='Display name'
                type="text"
                required
                onChange={handleChange}
                name="displayName"
                value={displayName}
            />
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
            <FormInput
                label="Confirm Password"
                type="password"
                required
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
            />
            <button className="c-button primary" >Signup</button>
        </form>
    )
}

export default SignUpForm