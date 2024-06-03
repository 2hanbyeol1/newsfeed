import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import UpButton from "./components/UpButton";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UpButton />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
