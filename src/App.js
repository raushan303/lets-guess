import { BrowserRouter } from 'react-router-dom';

import Routes from './component/RoutesComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
