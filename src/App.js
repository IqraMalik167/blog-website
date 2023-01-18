import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Title } from './Components/TitleSection/Title';

import { Home } from './Pages/Home';
import { ListDetailPage } from './Pages/ListDetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Subscription } from './Components/Subscription/Subscription';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ListDetailPage />} />
        </Routes>
      </Router>
      {/* <Subscription /> */}

    </div>
  );
}

export default App;
