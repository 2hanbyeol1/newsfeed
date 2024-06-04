import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Layout from "./components/Layout";
import UpButton from "./components/UpButton";
import Login from "./pages/Login";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import SignUp from "./pages/SignUp/SignUp";
import Write from "./pages/Write";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <UpButton />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
