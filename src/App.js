import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Search from './pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
