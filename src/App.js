import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Categories from './components/categories';
import Books from './components/bookForm';
import { Navbar } from './components/nav';
import './App.css';
import './styles.css';

function App() {
  const [url, setUrl] = useState(true);
  const statechange = () => {
    setUrl(!url);
  };
  return (
    <BrowserRouter>

      <div className="main-wrapper">
        <Navbar url={url} />
        <Routes>
          <Route path="/" element={<Books statechange={() => statechange()} />} />
          <Route path="/categories" element={<Categories statechange={() => statechange()} />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
