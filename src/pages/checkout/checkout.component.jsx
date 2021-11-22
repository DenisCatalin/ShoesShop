import React from 'react'
import { useSelector } from 'react-redux'
import { CheckoutPageContainer, CheckoutPageHeader, CheckoutHeaderSpacing, CheckoutPageTotal, CheckoutMainPageContainer } from './checkout.styles'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import Header from '../../components/header/header.component'

const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    return (
        <CheckoutPageContainer>
            <Header />
            <CheckoutMainPageContainer>
                <CheckoutPageHeader>
                    <CheckoutHeaderSpacing>
                        <span>Product</span>
                    </CheckoutHeaderSpacing>
                    <CheckoutHeaderSpacing>
                        <span>Description</span>
                    </CheckoutHeaderSpacing>
                    <CheckoutHeaderSpacing>
                        <span>Quantity</span>
                    </CheckoutHeaderSpacing>
                    <CheckoutHeaderSpacing>
                        <span>Price</span>
                    </CheckoutHeaderSpacing>
                    <CheckoutHeaderSpacing>
                        <span>Remove</span>
                    </CheckoutHeaderSpacing>
                </CheckoutPageHeader>
                {
                    cartItems.map(cartItem => (
                        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
                    ))
                }
                <CheckoutPageTotal>
                    <span>TOTAL: ${cartTotal.toFixed(2)}</span>
                </CheckoutPageTotal>
                <StripeCheckoutButton price={cartTotal} />
            </CheckoutMainPageContainer>
        </CheckoutPageContainer>
    )
}

export default CheckoutPage;
