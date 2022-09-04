import { AuthAction, AuthActionType } from '../actions/Auth';

interface AuthState {
    token: String | null;
    userId: String | null;
}

const initialState: AuthState = {
    token: null,
    userId: null
};

export default (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionType.AUTHENTICATE:
            return Object.assign({}, 
                state, 
                {token: action.token, userId: action.userId});
        case AuthActionType.LOGOUT:
            return initialState;
        case AuthActionType.SIGNUP:
            return Object.assign({}, 
                state, 
                {token: action.token, userId: action.userId});
        default:
            return state;
    }
};