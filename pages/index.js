import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import CardVegetation from "../components/Card";
import Layout from "../components/Layout";
import withAuth from "../components/withAuth";
import { StyledWrapper } from "./styled";
const Home = (props) => {
  const { token } = props;
  const [profile, setProfile] = useState();
  const [vegatation, setVegatation] = useState([]);

  useLayoutEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const result = await axios.get(`http://localhost/api/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (result?.status === 200) {
      setProfile(result.data);
      getVegetation(result?.data?.username)
    }
  };

  const getVegetation = async (username) => {
    const result = await axios.get(
      `http://localhost/api/history/${username}`
    );
    if (result?.status === 200) {
      setVegatation(result.data);
    }
  };

  return (
    <Layout token={token}>
      <StyledWrapper>
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
                    btn={false}
                  />
                </React.Fragment>
              );
            })}
          </>
        ) : (
          <div>No data</div>
        )}
      </StyledWrapper>
    </Layout>
  );
};
export default withAuth(Home);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
