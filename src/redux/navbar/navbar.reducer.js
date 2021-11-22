import NavbarActionTypes from './navbar.types'

const INITIAL_STATE = {
    hidden: true
};

const navbarReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case NavbarActionTypes.TOGGLE_NAVBAR: 
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;    
    }
} 

export default navbarReducer