import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import BasicLayout from "./layouts/BasicLayout";
import CenteredLayout from "./layouts/CenteredLayout";
import HeaderLayout from "./layouts/HeaderLayout";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import SignUp from "./pages/SignUp/SignUp";
import Write from "./pages/Write";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
        <Route element={<BasicLayout />}>
          <Route path="/write" element={<Write />} />
        </Route>
        <Route element={<CenteredLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
