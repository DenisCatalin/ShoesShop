import React, {useEffect, useState} from 'react'
import CartIcon from '../cart-icon/cart-icon.component';
import { HeaderContainer, LogoText, SpanColor, HeaderLinksContainer, HeaderLink, HeaderMenu, SignInLink } from './header.styles';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase/firebase.utils'
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const [userName, setUserName] = useState();
    useEffect(() => {
        if(currentUser !== null) setUserName(currentUser.displayName);
    }, [currentUser])
    return (
        <HeaderContainer>
            <LogoText Golden>St<SpanColor>o</SpanColor>re<SpanColor>.</SpanColor></LogoText>
            <HeaderLinksContainer>
                <HeaderLink to ='/'>SHOP</HeaderLink>
                <HeaderLink to ='/'>CONTACT</HeaderLink>
                <SignInLink onClick={currentUser ? () => auth.signOut() : signInWithGoogle}>{currentUser ? userName : 'SIGN IN'}</SignInLink>
                <CartIcon />
            </HeaderLinksContainer>
            <HeaderMenu to ='/'><i className="fas fa-bars"></i></HeaderMenu>
        </HeaderContainer>
    )
}

export default Header;
