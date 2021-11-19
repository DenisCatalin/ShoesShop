import React from 'react'
import Header from '../../components/header/header.component';
import { HomepageBackground, HomepageOpacity, HomepageHero, WelcomeContainer, DiscoverContainer, WelcomeText, WelcomeTextColor, DiscoverText, DiscoverTextColor, HomepageButton } from './homepage.styles';

const Homepage = () => {
    return (
        <HomepageBackground>
            <HomepageOpacity>
                <Header />
                <HomepageHero>
                    <WelcomeContainer>
                        <WelcomeText>WELCOME TO OUR</WelcomeText>
                        <WelcomeTextColor>SHOE STORE</WelcomeTextColor>
                    </WelcomeContainer>
                    <DiscoverContainer>
                        <DiscoverText><DiscoverTextColor>DISCOVER</DiscoverTextColor> OUR NEWEST COLLECTION OF <DiscoverTextColor>SNEAKERS</DiscoverTextColor></DiscoverText>
                    </DiscoverContainer>
                    <HomepageButton to='/product/1'>EXPLORE</HomepageButton>
                </HomepageHero>
            </HomepageOpacity>    
        </HomepageBackground>
    )
}

export default Homepage
