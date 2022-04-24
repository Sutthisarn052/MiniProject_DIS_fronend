import StyleWrapper from "../styles/sigin";
import { Input, Button } from "antd";
import { useState } from "react";
import { useRouter } from 'next/router'
import axios from "axios";
const signup = () => {
    const router = useRouter()
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')

    const handleSignup = async () => {
        try {
            let result = await axios.post('http://localhost/api/register',
            {
                username,password,email
            }
            )
            console.log(result);
            router.push('/signin')
        }
        catch (e) {
            alert(e)
        }
    }
  return (
    <StyleWrapper>
      <div className="box">
        <div className="contaner">
          <h1>Vegetation</h1>
          <p>ผู้ใช้งาน</p>
          <Input type="text" name="username" onChange={(e) => setUsername(e.target.value)}></Input>
          <p>อีเมล</p>
          <Input type="text" name="email" onChange={(e) => setEmail(e.target.value)}></Input>
          <p>รหัสผ่าน</p>
          <Input type="password" name="password" onChange={(e) => setPassword(e.target.value)}></Input>
          <div className="box">
            <span>มีบัญชีผู้ใชแล้ว</span>
            <a href="/signin">เข้าสู่ระบบ</a>
          </div>
          <Button type="primary" onClick={handleSignup}>สมัครสมาชิก</Button>
        </div>
      </div>
    </StyleWrapper>
  );
};
export default signup;
