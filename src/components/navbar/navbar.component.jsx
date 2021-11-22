import React, {useState, useEffect} from 'react';
import './navbar.styles';
import { useSelector, useDispatch } from 'react-redux';
import { NavbarContainer, HeaderLink, SignInLink } from './navbar.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { toggleNavbarHidden } from '../../redux/navbar/navbar.actions';

const Navbar = () => {
    const currentUser = useSelector(selectCurrentUser);
    const [userName, setUserName] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        if(currentUser !== null) setUserName(currentUser.displayName);
    }, [currentUser])

    return (
        <NavbarContainer>
            <HeaderLink to ='/product/1' onClick={() => { dispatch(toggleNavbarHidden()); } }>SHOP</HeaderLink>
            <HeaderLink to ='/' onClick={() => { dispatch(toggleNavbarHidden()); } }>CONTACT</HeaderLink>
            <SignInLink onClick={currentUser ? () => auth.signOut() : signInWithGoogle}>{currentUser ? userName : 'SIGN IN'}</SignInLink>
            <CartIcon />
        </NavbarContainer>
    )
}

export default Navbar
