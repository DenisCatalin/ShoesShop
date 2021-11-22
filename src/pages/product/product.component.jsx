import React from 'react';
import Header from '../../components/header/header.component';
import { useParams, useHistory } from 'react-router-dom';
import PRODUCTS_DATA from '../../redux/products/products.data';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import './product.styles.scss'
import { selectNavbarHidden } from '../../redux/navbar/navbar.selectors';
import Navbar from '../../components/navbar/navbar.component';

import { Product, ProductBackground, ProductContent, LeftSideContent, RightSideContent, ProductContentText, ProductDescription, ProductFirstText, 
    ProductSecondText, ProductSizeContainer, ProductSizeTitle, ProductSizeGrid, ProductSizeItem, ProductCircle, ProductButtonAdd, ProductParticles, 
    ProductButtons, ProductTitle, ProductPrice, ProductOpacity, ProductArrows } from './product.styles';
    
const ProductPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const navbar = useSelector(selectNavbarHidden);

    const { name, imageUrl, background, price, buttonsBG, buttonsColor, circleColor } = PRODUCTS_DATA.sneakers[params.id-1];

    const increaseProduct = () => {
        if(params.id < 7) history.push(`/product/${+params.id+1}`);
        else history.push('/product/1')
    }

    const decreaseProduct = () => {
        if(params.id < 2) history.push('/product/7');
        else history.push(`/product/${+params.id-1}`)
    }

    return (
        <ProductBackground>
            {navbar ? null : <Navbar />}
            <ProductOpacity style={{backgroundImage: `url(${background})`}}>
                <Header />
                <ProductContent>
                    <LeftSideContent>
                        <ProductContentText>
                            <ProductFirstText>Created with extreme</ProductFirstText>
                            <ProductSecondText>DURABILITY</ProductSecondText>
                            <ProductDescription>Shoes transform your body language and attitude. They lift you phisically and emotionally.</ProductDescription>
                        </ProductContentText>
                        <ProductSizeContainer>
                            <ProductSizeTitle>Select size</ProductSizeTitle>
                            <ProductSizeGrid>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>39.5</ProductSizeItem>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>40</ProductSizeItem>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>41</ProductSizeItem>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>42</ProductSizeItem>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>43</ProductSizeItem>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>43.5</ProductSizeItem>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>44</ProductSizeItem>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>44.5</ProductSizeItem>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>45</ProductSizeItem>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>45.5</ProductSizeItem>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>46</ProductSizeItem>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>47</ProductSizeItem>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>47.5</ProductSizeItem>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>48</ProductSizeItem>
                                <ProductSizeItem style={{background: buttonsBG, color: buttonsColor}}>48.5</ProductSizeItem>
                            </ProductSizeGrid>
                        </ProductSizeContainer>
                    </LeftSideContent>
                    <RightSideContent>
                        <Product><img src={imageUrl} alt={name} className='product-image'/></Product>
                        <ProductTitle>{name}</ProductTitle>
                        <ProductPrice>€{price}</ProductPrice>
                        <ProductCircle style={{background: circleColor}}>
                            <ProductParticles></ProductParticles>
                            <ProductParticles></ProductParticles>
                            <ProductParticles></ProductParticles>
                            <ProductParticles></ProductParticles>
                            <ProductParticles></ProductParticles>
                            <ProductParticles></ProductParticles>
                            <ProductParticles></ProductParticles>
                        </ProductCircle>
                        <ProductArrows>
                            <i className="fas fa-chevron-left" style={{cursor: 'pointer'}} onClick={decreaseProduct}></i>
                            <i className="fas fa-chevron-right" style={{cursor: 'pointer'}} onClick={increaseProduct}></i>
                        </ProductArrows>
                        <ProductButtons>
                            <ProductButtonAdd style={{background: buttonsBG, color: buttonsColor}} onClick={() => { dispatch(addItem(PRODUCTS_DATA.sneakers[params.id-1])); }}>Add to cart</ProductButtonAdd>
                        </ProductButtons>
                    </RightSideContent>
                </ProductContent>
            </ProductOpacity>
        </ProductBackground>
    )
}

export default ProductPage
