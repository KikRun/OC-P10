import Header from "../components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import User from "../pages/User/User";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Router>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/sign-in"} element={<SignIn />} />
            <Route path={"/user"} element={<User />} />
          </Routes>
        </Router>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
