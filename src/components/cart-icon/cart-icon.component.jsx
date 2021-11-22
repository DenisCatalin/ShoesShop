import { CartIconContainer, ShoppingIconStyle, CartIconItemsCount } from './cart-icon.styles';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { useSelector, useDispatch } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'

const CartIcon = () => {
    const itemCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();

    return (
        <CartIconContainer onClick={() => { dispatch(toggleCartHidden()); } }>
            <ShoppingIconStyle>
                <ShoppingIcon />
            </ShoppingIconStyle>
            <CartIconItemsCount>{itemCount}</CartIconItemsCount>
        </CartIconContainer>
    )
}

export default CartIcon;