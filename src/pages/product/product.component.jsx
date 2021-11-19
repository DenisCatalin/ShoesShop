import React from 'react';
import Header from '../../components/header/header.component';
// import { useParams } from 'react-router-dom';

import { ProductBackground, ProductContent, ProductOpacity, LeftSideContent, RightSideContent, ProductContentText, ProductDescription, ProductFirstText, 
    ProductSecondText, ProductSizeContainer, ProductSizeTitle, ProductSizeGrid, ProductSizeItem, ProductCircle, Product, ProductButtonAdd, ProductButtonFav, ProductParticles, ProductButtons  } from './product.styles';

const ProductPage = () => {
    // const params = useParams();
    return (
        <ProductBackground>
            <ProductOpacity>
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
                                <ProductSizeItem>39.5</ProductSizeItem>
                                <ProductSizeItem>39.5</ProductSizeItem>
                                <ProductSizeItem>39.5</ProductSizeItem>
                                <ProductSizeItem>39.5</ProductSizeItem>
                                <ProductSizeItem>39.5</ProductSizeItem>
                                <ProductSizeItem>39.5</ProductSizeItem>
                                <ProductSizeItem>39.5</ProductSizeItem>
                                <ProductSizeItem>39.5</ProductSizeItem>
                                <ProductSizeItem>39.5</ProductSizeItem>
                                <ProductSizeItem>39.5</ProductSizeItem>
                                <ProductSizeItem>39.5</ProductSizeItem>
                                <ProductSizeItem>39.5</ProductSizeItem>
                                <ProductSizeItem>39.5</ProductSizeItem>
                                <ProductSizeItem>39.5</ProductSizeItem>
                                <ProductSizeItem>39.5</ProductSizeItem>
                            </ProductSizeGrid>
                        </ProductSizeContainer>
                    </LeftSideContent>
                    <RightSideContent>
                        <Product></Product>
                        <ProductCircle>
                            <ProductParticles></ProductParticles>
                            <ProductParticles></ProductParticles>
                            <ProductParticles></ProductParticles>
                            <ProductParticles></ProductParticles>
                            <ProductParticles></ProductParticles>
                            <ProductParticles></ProductParticles>
                            <ProductParticles></ProductParticles>
                        </ProductCircle>
                        <ProductButtons>
                            <ProductButtonAdd>Add to cart</ProductButtonAdd>
                            <ProductButtonFav>Add to favourite</ProductButtonFav>
                        </ProductButtons>
                    </RightSideContent>
                </ProductContent>
            </ProductOpacity>
        </ProductBackground>
    )
}

export default ProductPage
