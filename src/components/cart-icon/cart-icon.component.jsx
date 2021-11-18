import { CartIconContainer, ShoppingIconStyle, CartIconItemsCount } from './cart-icon.styles';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
    return (
        <CartIconContainer>
            <ShoppingIconStyle>
                <ShoppingIcon />
            </ShoppingIconStyle>
            <CartIconItemsCount>0</CartIconItemsCount>
        </CartIconContainer>
    )
}

export default CartIcon;