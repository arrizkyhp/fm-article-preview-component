import { BrowserRouter as Router, Route} from 'react-router-dom';

import 'assets/css/style.css'
import Home from 'pages/Home';


function App() {
  return (
    <Router basename="/">
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
