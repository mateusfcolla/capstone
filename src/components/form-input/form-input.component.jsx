
const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="c-form-input">
                <label htmlFor="">{label}</label>
                <input
                    {...otherProps}
                />
        </div>
    );
}

export default FormInput;