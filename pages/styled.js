import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x:hidden;
`;

export const StyledWrapperManage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  height: 90vh;
  overflow-y:auto;
`;



export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  .form {
    width: 600px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  width: 98%;
`;
