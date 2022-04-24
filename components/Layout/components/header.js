import { Menu, Dropdown, Divider } from "antd";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";

const Header = (props) => {
  const { token } = props;
  const route = useRouter();
  const [profile, setProfile] = useState();

  useLayoutEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const result = await axios.get(`http://localhost/api/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (result?.status === 200) {
      setProfile(result.data);
    }
  };

  const handdleSignOut = async () => {
    const result = await axios.get(`http://localhost/api/logout`, {
      withCredentials: true,
    });
    if (result?.status === 200) {
      route.push("/signin");
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link href="/">หน้าหลัก</Link>
      </Menu.Item>
      <Menu.Divider />

      <Menu.Item key="1">
        <Link href="/manage">จัดการข้อมูล</Link>
      </Menu.Item>
      <Menu.Divider />

      <Menu.Item key="2">
        <div onClick={() => handdleSignOut()}>ออกจากระบบ</div>
      </Menu.Item>
      <Menu.Divider />
    </Menu>
  );

  return (
    <div className="flex items-center justify-between p-10 w-full h-12 bg-green-400">
      <div className="text-3xl font-bold">Science flower garden</div>
      <div className="flex items-center">
        <div className="text-base font-medium">{profile?.username}</div>
        <Divider type="vertical" className=" bg-black h-5" />
        <Dropdown overlay={menu}>
          <div className="flex items-center">เมนู</div>
        </Dropdown>
      </div>
    </div>
  );
};
export default Header;
