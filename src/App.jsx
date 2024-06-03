import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import UpButton from "./components/UpButton";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import Write from "./pages/Write";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <UpButton />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
