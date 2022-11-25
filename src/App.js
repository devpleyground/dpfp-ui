import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Layout from './components/layout/layout';
import Home from './pages/Home/Home';
import Semple from './pages/Semple/Semple';
import theme from "./styles/theme";

function App() {
  return (
   <>
   <ThemeProvider theme={theme}>
    <GlobalStyles/>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/semple" element={<Semple />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
   </ThemeProvider>
   </>
  );
}

export default App;
