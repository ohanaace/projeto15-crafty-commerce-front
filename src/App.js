import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import SignUp from "./pages/SignUp";
import UserProvider from "./contexts/loginContext";
import HomePage from "./pages/HomePage";

const apiUrl = process.env.REACT_APP_API_URL;

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/carrinho" element={<CartPage />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
export { apiUrl };
