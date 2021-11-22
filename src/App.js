import './App.css';
import { BrowserRouter as Router, Route/*, Redirect*/ } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ProductPage from './pages/product/product.component';
import CheckoutPage from './pages/checkout/checkout.component';
// import { addCollectionAndDocuments } from './firebase/firebase.utils';

function App() {

  // addCollectionAndDocuments('collections', collectionsArray.map(obj =>({ title, items }) => ({ title, items })));
  return (
    <Router>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/product/:id' component={ProductPage}/>
      <Route exact path='/checkout' component={CheckoutPage}/>
    </Router>
  );
}

export default App;
