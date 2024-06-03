import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import UpButton from "./components/UpButton";
import Detail from "./pages/Detail";
import Write from "./pages/Write";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UpButton />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
