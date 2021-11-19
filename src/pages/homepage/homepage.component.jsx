import React, { useEffect } from 'react'
import Header from '../../components/header/header.component';
import { HomepageBackground, HomepageOpacity, HomepageHero, WelcomeContainer, DiscoverContainer, WelcomeText, WelcomeTextColor, DiscoverText, DiscoverTextColor, HomepageButton } from './homepage.styles';
import { auth, createUserProfileDocument, /*addCollectionAndDocuments*/} from '../../firebase/firebase.utils';
import { connect, useSelector } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Homepage = ({ setCurrentUser }) => {
    
    const user = useSelector((currentUser) => {
        const data = currentUser.user.currentUser;
        if(data !== null) {  }
    });

    useEffect(() => {
        auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        user,
                        ...snapShot.data()
                    });
                });
            } else { setCurrentUser(userAuth); }
        });
    }, [setCurrentUser, user]);


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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
