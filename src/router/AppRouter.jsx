import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/about/About";
import Details from "../pages/details/Contact";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/notfound/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/about" element={<PrivateRouter />}>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/contact" element={<PrivateRouter />}>
          <Route path="/contact" element={<Details />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Details />} />
        <Route path="/*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
