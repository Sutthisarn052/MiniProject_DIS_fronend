import { Button, Modal, Form, Input } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { StyledWrapper } from "./styled";

const CardVegetation = (props) => {
  const {
    image,
    name,
    characteristic,
    foundSource,
    date,
    author,
    btn,
    tst_id,
  } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    form.setFieldsValue({
      name: name,
      specific: characteristic,
      foundSource: foundSource,
      date: date,
      image: image,
    });
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const route = useRouter();

  const onFinish = async (values) => {
    const result = await axios.put(`http://localhost/api/edit`, {
      tst_id: tst_id,
      scientific_name: values.name,
      characteristic: values.specific,
      foundsource: values.foundSource,
      date: values.date,
      imgURL: values.image,
    });
    if (result?.status === 200) {
      setIsModalVisible(false);
      route.reload();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleDelete = async () => {
    const result = await axios.delete(`http://localhost/api/delete/${tst_id}`);
    if (result?.status === 200) {
      route.reload();
    }
  };

  return (
    <StyledWrapper>
      <div className="images-vegetation">
        <img src={`${image}`} alt={name} width="100%" height="auto" />
      </div>
      <div className="content-vegetation">
        <div className="listview">
          <div>
            ชื่อวิทยาศาสตร์ : <span className="detail-of-content">{name}</span>
          </div>
          <div>
            ลักษณะเฉพาะ :{" "}
            <span className="detail-of-content">{characteristic}</span>
          </div>
          <div>
            แหล่งที่พบ :{" "}
            <span className="detail-of-content">{foundSource}</span>
          </div>
          <div>
            วันที่บันทึก : <span className="detail-of-content">{date}</span>
          </div>
          <div>
            บันทึกโดย : <span className="detail-of-content">{author}</span>
          </div>
        </div>
        {btn && (
          <div className="btn-edit-del">
            <Button
              type="primary"
              size="middle"
              className="btn"
              onClick={showModal}
            >
              แก้ไข
            </Button>
            <Button
              type="primary"
              danger
              size="middle"
              className="btn"
              onClick={() => handleDelete()}
            >
              ลบ
            </Button>
            <Modal
              title="Basic Modal"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
            >
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
                  rules={[
                    { required: true, message: "กรุณากรอกชื่อวิทยาศาสตร์!" },
                  ]}
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
                    แก้ไขข้อมูล
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};
export default CardVegetation;
