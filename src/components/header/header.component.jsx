import React, {useEffect, useState} from 'react'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { HeaderContainer, LogoText, SpanColor, HeaderLinksContainer, HeaderLink, HeaderMenu, SignInLink } from './header.styles';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../firebase/firebase.utils'
import { selectCurrentUser } from '../../redux/user/user.selector';
import { useHistory } from 'react-router-dom';
import { toggleNavbarHidden } from '../../redux/navbar/navbar.actions';
import { selectNavbarHidden } from '../../redux/navbar/navbar.selectors';

const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const [userName, setUserName] = useState();
    const history = useHistory();
    const navbar = useSelector(selectNavbarHidden);
    const hidden = useSelector(selectCartHidden);
    const dispatch = useDispatch();
    useEffect(() => {
        if(currentUser !== null) setUserName(currentUser.displayName);
    }, [currentUser])
    return (
        <HeaderContainer>
            <LogoText onClick={() => { history.push('/'); dispatch(toggleNavbarHidden()); }}>St<SpanColor>o</SpanColor>re<SpanColor>.</SpanColor></LogoText>
            <HeaderLinksContainer>
                <HeaderLink to ='/product/1' onClick={() => { dispatch(toggleNavbarHidden()); } }>SHOP</HeaderLink>
                <HeaderLink to ='/' onClick={() => { dispatch(toggleNavbarHidden()); } }>CONTACT</HeaderLink>
                <SignInLink onClick={currentUser ? () => auth.signOut() : signInWithGoogle}>{currentUser ? userName : 'SIGN IN'}</SignInLink>
                <CartIcon />
            </HeaderLinksContainer>
            {hidden ? null : <CartDropdown />}
            {navbar ? 
            <HeaderMenu onClick={() => { dispatch(toggleNavbarHidden()); } }><i className="fas fa-bars"></i></HeaderMenu> : 
            <HeaderMenu onClick={() => { dispatch(toggleNavbarHidden()); } }><i className="fas fa-times"></i></HeaderMenu>}
        </HeaderContainer>
    )
}

export default Header;
