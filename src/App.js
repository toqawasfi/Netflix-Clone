import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      
      </Routes>

    </div>
  );
}

export default App;
