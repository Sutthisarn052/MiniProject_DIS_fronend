import { Input, Button } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const signup = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = async () => {
    try {
      let result = await axios.post("http://localhost/api/register", {
        username,
        password,
        email,
      });
      console.log(result);
      router.push("/signin");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
      <div className=" border-2 border-green-400 p-4 rounded-xl bg-white w-80">
        <div className="grid grid-cols-1 gap-4">
          <h1 className="text-2xl font-bold text-center">Vegetation</h1>
          <p className="text-gray-500">ผู้ใช้งาน</p>
          <Input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="text-gray-500">อีเมล</p>
          <Input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-gray-500">รหัสผ่าน</p>
          <Input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="my-2 flex justify-between">
            <span>มีบัญชีผู้ใชแล้ว</span>
            <a href="/signin">เข้าสู่ระบบ</a>
          </div>
          <Button type="primary" className="w-full" onClick={handleSignup}>
            สมัครสมาชิก
          </Button>
        </div>
      </div>
    </div>
  );
};
export default signup;
