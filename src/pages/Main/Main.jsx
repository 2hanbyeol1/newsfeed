import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Link to={"/mypage"}>mypage로 이동하기</Link>
    </div>
  );
}

export default Main;
