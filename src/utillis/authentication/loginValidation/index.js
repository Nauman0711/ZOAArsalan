import { emailValidation, passwordValidation } from "../validation";

export const loginValidation = ({ email, password }) => {
    const { valid, error } = emailValidation({ email });
    const passwordValidate = passwordValidation({ password });
    if (!valid) {
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