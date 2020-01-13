import styled from 'styled-components';

export const ContainerWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageHeader = styled.h1`
  font-size: 24px;
  font-family: "Open Sans", sans-serif;
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  
  image {
    width: 21em;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const FormWrapper = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;  
`;

export const FormLabel = styled.label`
  font-size: 20px;
`;

export const FormInput = styled.input`
  margin-top: 6px;
  min-width: 18em;
  height: 37px;
  padding: 0px 10px;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  background-color: #F3F3F3;
  border: 0;
  border-radius: 4px;
  margin-bottom: 31px;
  transition: all 250ms ease-in-out;
  
  &:hover {
    //background-color: #FFFFFF;
    //box-shadow: 0px 0px 14px 0.3px #0E81CE96;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0px 0px 12px 0.8px #3474DBB2;
  }
`;

export const StyledFooter = styled.div`
  margin-top: 3em;
`;

export const BttnLogin = styled.button`
  background-color: #368F8B;
  border-radius: 28px;
  border: 1 px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #FFFFFF;
  font-family: "Open Sans";
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2F6627;
  
  &:hover {
    background-color: #246A73;
  }
  
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const BttnRegister = styled.button`
  background-color: #6359FF;
  border-radius: 28px;
  border: 1 px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #FFFFFF;
  font-family: "Open Sans";
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2F6627;
  
  &:hover {
    background-color: #CF5C36;
  }
  
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const BttnStudent = styled.button`
  background-color: #6CD4FF;
  border-radius: 28px;
  border: 1 px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #FFFFFF;
  font-family: "Open Sans";
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2F6627;
  
  &:hover {
    background-color: #CF5C36;
  }
  
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const BttnHelper = styled.button`
  background-color: #CFB1B7;
  border-radius: 28px;
  border: 1 px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #FFFFFF;
  font-family: "Open Sans";
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2F6627;
  
  &:hover {
    background-color: #CF5C36;
  }
  
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  
 item {
    flex: 0 0 auto;
    margin: 16px;
  }
`;