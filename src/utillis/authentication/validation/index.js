export const emailValidation = ({ email }) => {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email === '') {
        return {
            valid: false,
            error: 'Please Enter Your Email'
        }
    } else if (!reg.test(email)) {
        return {
            valid: false,
            error: 'Please Enter a Valid Email'
        }
    } else {
        return {
            valid: true,
            error: null
        }
    }
}
export const passwordValidation = ({ password }) => {
    if (password === '') {
        return {
            valid: false,
            error: 'Please Enter Your Password'
        }

    } else if (password.length < 8) {
        return {
            valid: false,
            error: 'Password Must be atleast 8 Characters Long'
        }
    } else {
        return {
            valid: true,
            error: null
        }
    }
}

export const confirmPasswordValidation = ({ password, confirmPassword }) => {
    const { valid, error } = passwordValidation({ password });
    if (!valid) {
        return {
            valid: false,
            error: error
        };
    } else if (password.length < 8) {
        return {
            valid: false,
            error: 'Password Must be atleast 8 Characters Long'
        }
    } else if (confirmPassword === '') {
        return {
            valid: false,
            error: 'Please Enter Your Confirm Password'
        }
    } else if (password !== confirmPassword) {
        return {
            valid: false,
            error: "Passwords Doesn't Match"
        }
    } else {
        return {
            valid: true,
            error: null
        }
    }
}

export const nameValidation = ({ full_name }) => {
    if (full_name === "") {
        return {
            valid: false,
            error: full_name === "" ? "Please Enter Your Name" : null
        }
    }
    else if (full_name?.length < 3) {
        return {
            valid: false,
            error: full_name?.length < 3 ? "Name must should contain 3 letters" : null
        }
    }
    else {
        return {
            valid: true,
            error: null
        }
    }

}