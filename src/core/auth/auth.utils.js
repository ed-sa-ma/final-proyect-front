
export const AUTH_STORAGE_KEY = 'auth_token';


export const wrapUsingAuth = (options = {}) => {
    options.headers = {
    ...options.headers,
            'Authorization': `Bearer ${localStorage.getItem(AUTH_STORAGE_KEY)}`
        }
    return options;       
    
}

