import { emailValidation, nameValidation, passwordValidation } from "../validation";

export const signUpValidation = ({ full_name, email, password }) => {
    const nameValidate = nameValidation({ full_name })
    const { valid, error } = emailValidation({ email });
    const passwordValidate = passwordValidation({ password });
    if (!nameValidate.valid) {
        return {
            valid: false,
            error: nameValidate.error
        };
    }
   else if (!valid) {
        return {
            valid: false,
            error: error
        };
    }
    else if (!passwordValidate.valid) {
        return {
            valid: false,
            error: passwordValidate.error
        };
    }
    else {
        return { valid: true, error: null }
    }
}