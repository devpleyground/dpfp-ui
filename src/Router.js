import Layout from "./components/layout/layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Semple from "./pages/Semple/Semple";

function Router() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/semple" element={<Semple />}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;