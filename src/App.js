import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/create/Create";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Account from "./pages/account/Account";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
