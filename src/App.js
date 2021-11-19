import './App.css';
import { BrowserRouter as Router, Route/*, Redirect*/ } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ProductPage from './pages/product/product.component';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/product/:id' component={ProductPage}/>
    </Router>
  );
}

export default App;
