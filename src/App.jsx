import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/notfound.scss';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import Notfound from './Pages/Notfound';
import MainLayout from './Components/MainLayout';
import './Styles/styles.scss';
import Show from './Components/Show';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
          </Route>
          {/* page with dynamic content. creating Show page */}
          <Route path="/show/:showid" element={<Show />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
