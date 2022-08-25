import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element = {<Login/>}/>
            <Route 
              path ='home' 
              element={
                <>
                  <Header/>
                  <Home/>
                </>
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
