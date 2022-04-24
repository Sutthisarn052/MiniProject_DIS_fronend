import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  max-height: 325px;
  height: auto;
  border-style: solid;
  border-width: 3px;
  border-color: #00ffb2;
  border-radius: 10px;
  margin: 10px;

  .images-vegetation {
    display: block;
    padding: 20px;
    max-height: 138px;
    object-fit: cover;
  }

  .content-vegetation {
    display: flex;
    flex-direction: column;
    height: 180px;
    overflow-y: hidden;
    position: relative;
    padding: 9px;
    padding-bottom:12px;
    font-size: 16px;
    font-weight: bold;
  }
  .listview {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  .detail-of-content {
    font-weight: normal;
    font-size: 14px;
  }
  .btn-edit-del {
    margin-top:10px;
    width: 100%;
    text-align: center;
  }
  .btn{
    margin-left:8px;
    margin-right:8px;
    
  }
`;
