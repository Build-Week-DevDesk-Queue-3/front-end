import styled from 'styled-components';

export const ContainerWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #D72638;
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
  background-color: #1B2021;
  border: 0;
  border-radius: 4px;
  margin-bottom: 31px;
  transition: all 250ms ease-in-out;
  
  &:hover {
    //background-color: #E2E0FF;
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
  background-color: #6A61FF;
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
    background-color: #680E4B;
  }
  
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const BttnRegister = styled.button`
  background-color: #6A61FF;
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
    background-color: #680E4B;
  }
  
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const BttnStudent = styled.button`
  background-color: #6A61FF;
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
    background-color: #680E4B;
  }
  
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const BttnHelper = styled.button`
  background-color: #6A61FF;
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
    background-color: #680E4B;
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

export const Body = styled.section`
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
`;

export const StyledApp = styled.div`
  display: flex;
`;

export const SideContainer = styled.div`
  min-height: 100vh;
  background-color: #515052;
`;

export const StyledBar = styled.div`
  width: 200px;
  padding-top: 25px;
`;

export const SideLink = styled.link`
  padding: 10px;
  
  &:hover {
    border-right: 5px solid dimgray;
    background-color: #680E4B;
  }
`;

export const ContentBttn = styled.button`
  margin: 10px;  
`;

export const WelcomeStd = styled.h1`
  margin-left: 10%;
  color: #6A61FF;
`;

export const StdComponent = styled.div`
  margin-top: -22px;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #D72638;
`;

export const StdTik = styled.div`
  color: #F0F4F7;
`;

export const StdTikContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StdSubContainer = styled.div`
  width: 40%;
`;

export const StdCreateBttn = styled.button`
  float: left;
  margin-left: 8%;
  margin-top: 10px;
  padding: 10px;
`;

export const ListHelper = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #000000;
  background: #515052;
`;