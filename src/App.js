import './App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import AccountPage from './components/AccountPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Nav />
          <h1>Welcome to The Safe Place!</h1>
          <h2>Where you are safe</h2>
        </header>
        <Routes> 
            <Route path="/*" element={<LoginForm />} />
            <Route path="/accountpage/:name" element={<AccountPage />} />        
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
