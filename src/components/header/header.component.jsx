import React from 'react'
import CartIcon from '../cart-icon/cart-icon.component';
import { HeaderContainer, LogoText, SpanColor, HeaderLinksContainer, HeaderLink, HeaderMenu } from './header.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <LogoText>St<SpanColor>o</SpanColor>re<SpanColor>.</SpanColor></LogoText>
            <HeaderLinksContainer>
                <HeaderLink to ='/'>SHOP</HeaderLink>
                <HeaderLink to ='/'>CONTACT</HeaderLink>
                <HeaderLink to ='/'>SIGN IN</HeaderLink>
                <CartIcon />
            </HeaderLinksContainer>
            <HeaderMenu to ='/'><i className="fas fa-bars"></i></HeaderMenu>
        </HeaderContainer>
    )
}

export default Header;
