import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px 10px 40px;
  width: 100%;
  height: 48px;
  background-color: #00ffb2;

  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .username-menu {
    display: flex;
    align-items: center;
  }
  .sub-username {
    font-size: 15px;
    font-weight: 600;
  }
  .sub-menu {
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
  }
  .divider {
    background-color: black;
    height: 20px;
  }
`;