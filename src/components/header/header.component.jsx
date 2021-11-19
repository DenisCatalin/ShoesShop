import React from 'react'
import CartIcon from '../cart-icon/cart-icon.component';
import { HeaderContainer, LogoText, SpanColor, HeaderLinksContainer, HeaderLink, HeaderMenu } from './header.styles';
import { signInWithGoogle } from '../../firebase/firebase.utils'

const Header = () => {
    return (
        <HeaderContainer>
            <LogoText Golden>St<SpanColor>o</SpanColor>re<SpanColor>.</SpanColor></LogoText>
            <HeaderLinksContainer>
                <HeaderLink to ='/'>SHOP</HeaderLink>
                <HeaderLink to ='/'>CONTACT</HeaderLink>
                <HeaderLink to ='/' onClick={signInWithGoogle}>SIGN IN</HeaderLink>
                <CartIcon />
            </HeaderLinksContainer>
            <HeaderMenu to ='/'><i className="fas fa-bars"></i></HeaderMenu>
        </HeaderContainer>
    )
}

export default Header;
