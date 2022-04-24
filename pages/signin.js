import StyleWrapper from "../styles/sigin";
import { Input, Button } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const sigin = ({ token }) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    try {
      let result = await axios.post(
        "http://localhost/api/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      console.log(result);
      router.push("/");
    } catch (e) {
      alert("ผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  const guestUser = async () => {
    try {
      let result = await axios.get("http://localhost/api/guest");
      try {
        let resultTologin = await axios.post(
          "http://localhost/api/login",
          {
            username: result.data.username,
            password: '123456',
          },
          { withCredentials: true }
        );
        console.log(result);
        router.push("/");
      } catch (e) {
        alert(e);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <StyleWrapper>
      <div className="box">
        <div className="contaner">
          <h1>Vegetation</h1>
          <p>ผู้ใช้งาน</p>
          <Input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <p>รหัสผ่าน</p>
          <Input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <div className="box">
            <span>หากยังไม่มีบัญชี</span>
            <a href="/signup">สมัครสมาชิก</a>
          </div>
          <div className="box">
            <a onClick={guestUser}>เข้าโดยไม่มีบัญชี</a>
          </div>
          <Button type="primary" onClick={handleSignin}>
            เข้าสู่ระบบ
          </Button>
        </div>
      </div>
    </StyleWrapper>
  );
};
export default sigin;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
