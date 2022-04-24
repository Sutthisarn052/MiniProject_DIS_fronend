import styled from "styled-components";
const StyleWrapper = styled.div`
  height: 100vh;
  * {
    margin: 0px;
    padding: 0px;
  }
  background-color: #8AF76F;
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }
  .contaner {
    background: #F4F6F6;
    border-radius: 5px;
    box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);
    min-width: 320px;
    display: flex;
    flex-direction: column;
    //align-items: center;
    padding: 0 5rem;
  }
  h1 {
    text-align: center;
  }
  span {
    font-size: 0.8rem;
    text-align: left;
  }
  a {
    margin-left: 5px;
  }
  .ant-btn-primary {
    margin: 1rem 0;
  }

  p {
    margin: 0 0 0 5px;
  }
`;
export default StyleWrapper;
