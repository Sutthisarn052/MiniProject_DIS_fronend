import { Button, Input, Form } from "antd";
import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import CardVegetation from "../components/Card";
import Layout from "../components/Layout";
import withAuth from "../components/withAuth";
import { FormWrapper, StyledWrapperManage, Container } from "./styled";

const Manage = (props) => {
  const { token } = props;
  const [profile, setProfile] = useState();
  const [vegatation, setVegatation] = useState([]);
  const [form] = Form.useForm();

  useLayoutEffect(() => {
      fetch();
  }, []);

  const fetch = async () => {
    await getProfile();
  };

  const getProfile = async () => {
    const result = await axios.get(`http://localhost/api/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
      if (result?.status === 200) {
      setProfile(result.data);
      getVegetation(result.data.username);
    }
  };

  const getVegetation = async (username) => {
    const result = await axios.get(`http://localhost/api/history/${username}`);
      if (result?.status === 200) {
          console.log(result.data);
      setVegatation(result.data);
    }
  };

  const onFinish = async (values) => {
    const result = await axios.post(
      `http://localhost/api/add`,
      {
        username: profile?.username,
        scientific_name: values.name,
        characteristic: values.specific,
        foundsource: values.foundSource,
        date: values.date,
        imgURL: values.image,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (result?.status === 200) {
      getVegetation(profile?.username);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout token={token}>
      <Container>
        <FormWrapper>
          <Form
            form={form}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="form"
          >
            <Form.Item
              label="ชื่อวิทยาศาสตร์ :"
              name="name"
              rules={[{ required: true, message: "กรุณากรอกชื่อวิทยาศาสตร์!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="ลักษณะเฉพาะ :"
              name="specific"
              rules={[{ required: true, message: "กรุณากรอกลักษณะเฉพาะ!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="แหล่งที่พบ :"
              name="foundSource"
              rules={[{ required: true, message: "กรุณากรอกแหล่งที่พบ!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="วันที่ :"
              name="date"
              rules={[{ required: true, message: "กรุณากรอกวันที่!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="ลิงค์รูปภาพ :"
              name="image"
              rules={[{ required: true, message: "กรุณากรอกลิงค์รูปภาพ!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" danger>
                เพิ่มข้อมูล
              </Button>
            </Form.Item>
          </Form>
        </FormWrapper>
        <StyledWrapperManage>
          {vegatation.length ? (
            <>
              {vegatation?.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <CardVegetation
                      image={item?.imgURL}
                      name={item?.scientific_name}
                      characteristic={item?.characteristic}
                      foundSource={item?.foundsource}
                      date={item?.date}
                      author={item?.username}
                      tst_id={item?.tst_id}
                      btn={true}
                    />
                  </React.Fragment>
                );
              })}
            </>
          ) : (
            <div>No data</div>
          )}
        </StyledWrapperManage>
      </Container>
    </Layout>
  );
};
export default withAuth(Manage);
export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
