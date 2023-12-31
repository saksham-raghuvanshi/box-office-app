import { Routes, Route, HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './Styles/notfound.scss';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import Notfound from './Pages/Notfound';
import MainLayout from './Components/MainLayout';
import './Styles/styles.scss';
import Show from './Components/Show';
import { GlobalTheme } from './Styles/theme';

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <GlobalTheme>
          <HashRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/starred" element={<Starred />} />
              </Route>
              {/* page with dynamic content. creating Show page */}
              <Route path="/show/:showid" element={<Show />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </HashRouter>
        </GlobalTheme>
      </QueryClientProvider>
    </div>
  );
}

export default App;
