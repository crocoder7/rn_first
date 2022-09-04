export enum AuthActionType {
    AUTHENTICATE = 'AUTHENTICATE',
    LOGOUT = 'LOGOUT',
    SIGNUP = 'SIGNUP'
}

interface AuthenticateAction {
    type: AuthActionType.AUTHENTICATE,
    token: string,
    userId: string
}

interface LogoutAction {
    type: AuthActionType.LOGOUT,
    token: string,
    userId: string
}

interface SIGNUP {
    type: AuthActionType.SIGNUP,
    token: string,
    userId: string
}

export type AuthAction = 
        | AuthenticateAction
        | LogoutAction
        | SIGNUP;

export const signup = (email : String, password : String) => {
    
}