import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
