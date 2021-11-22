import React from 'react'
import { CartItemContainer, CartItemDetails, CartItemFontSizeText } from './cart-item.styles'

const CartItem = ({ item: { quantity }, imageUrl, name, price}) => {
    return (
        <CartItemContainer>
            <img src={imageUrl} alt='item' style={{width: '40%', objectFit: 'cover'}}/>
            <CartItemDetails>
                <CartItemFontSizeText>{name}</CartItemFontSizeText>
                <CartItemFontSizeText>{quantity} x ${price}</CartItemFontSizeText>
            </CartItemDetails>
        </CartItemContainer>
    )
}

export default CartItem
