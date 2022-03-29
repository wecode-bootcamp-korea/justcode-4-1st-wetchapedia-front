import { Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Search from './pages/Search/Search';

function App() {
  return (
    <div className="App">
      <Route path="/" element={<Main />} />
      <Route path="/Detail/:id" element={<Detail />} />
      <Route path="/Search" element={<Search />} />
    </div>
  );
}

export default App;
