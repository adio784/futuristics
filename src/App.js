import logo from './logo.svg';
import './App.css';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import AppContext from './components/AppContext/AppContext';

function App() {
  return (
    <div className="App">
      {/* <AppContext> */}
          <Pages></Pages>
      {/* </AppContext> */}
    </div>
  );
}

export default App;
