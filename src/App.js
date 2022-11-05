import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from "./styles/GlobalStyles";
import Layout from './components/layout/layout';
import Home from './pages/Home/Home';
import Semple from './pages/Semple/Semple';

function App() {
  return (
   <>
    <GlobalStyles/>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/semple" element={<Semple />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
   </>
  );
}

export default App;
