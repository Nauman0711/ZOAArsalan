import { errorHandling } from '../errorHandling';
import { instance, instanceFormData, instanceWithoutHeader } from '../instance'

export const post_request = async ({ target, body }) => {
    try {
        const response = await instance().post(target, body)
            .catch((e) => {
                errorHandling(e)
                return 'Error'
            })
        if (response?.status >= 200 && response?.status < 300) {
            return response
        } else {
            return 'Error'
        }
    } catch (e) {
        errorHandling(e)
        return 'Error'
    }
}
export const post_request_formData = async ({ target, body, onUploadProgress }) => {
    try {
        const response = await instanceFormData({ onUploadProgress }).post(target, body)
            .catch((e) => {
                errorHandling(e)
                return 'Error'
            })
        if (response?.status >= 200 && response?.status < 300) {
            return response
        } else {
            return 'Error'
        }
    } catch (e) {
        errorHandling(e)
        return 'Error'
    }
}
export const get_request = async ({ target, params }) => {
    try {
        const response = await instance().get(target, { params })
            .catch((e) => {
                errorHandling(e)
                return 'Error'
            })
        if (response?.status >= 200 && response?.status < 300) {
            return response
        } else {
            return 'Error'
        }
    } catch (error) {
        errorHandling(error)
        return "Error"
    }
}

export const get_withoutHeader = async ({ target, body }) => {
    try {
        const response = await instanceWithoutHeader().post(target, body)
            .catch((e) => {
                errorHandling(e)
                return 'Error'
            })
        if (response?.status >= 200 && response?.status < 300) {
            return response
        } else {
            return 'Error'
        }
    } catch (error) {
        errorHandling(error)
        return "Error"
    }
}

export const put_request = async ({ target, body }) => {
    try {
        const response = await instance().put(target, body)
            .catch((e) => {
                errorHandling(e)
                return 'Error'
            })
        if (response?.status >= 200 && response?.status < 300) {
            return response
        } else {
            return 'Error'
        }
    } catch (error) {
        errorHandling(error)
        return "Error"
    }
}

export const delete_request = async ({ target, body }) => {
    try {
        const response = await instance().delete(target, body)
            .catch((e) => {
                errorHandling(e)
                return 'Error'
            })
        if (response?.status >= 200 && response?.status < 300) {
            return response
        } else {
            return 'Error'
        }
    } catch (error) {
        errorHandling(error)
        return "Error"
    }
}
export const patch_request = async ({ target, body }) => {
    try {
        const response = await instanceFormData().patch(target, body)
            .catch((e) => {
                errorHandling(e)
                return 'Error'
            })
        if (response?.status >= 200 && response?.status < 300) {
            return response
        } else {
            return 'Error'
        }
    } catch (error) {
        errorHandling(error)
        return "Error"
    }
}

export const patchwithoutType = async ({ target, body }) => {
    try {
        const response = await instance().patch(target, body)
            .catch((e) => {
                errorHandling(e)
                return 'Error'
            })
        if (response?.status >= 200 && response?.status < 300) {
            return response
        } else {
            return 'Error'
        }
    } catch (error) {
        errorHandling(error)
        return "Error"
    }
}