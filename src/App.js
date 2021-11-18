import './App.css';
import { BrowserRouter as Router, Route/*, Redirect*/ } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Homepage}/>
    </Router>
  );
}

export default App;
