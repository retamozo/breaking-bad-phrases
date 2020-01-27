import styled from "@emotion/styled";

export const Container = styled.div`
padding-top: 20rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerPhrase = styled.div`
max-height:200px;
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;


  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
    position: relative;
    /* padding-left: 4rem */
  }
    /* &:before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    } */
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size:25px;
        text-align: left;
        color: #666;
        font-weight: bold;
        padding: 1rem 0;
    }
  
`;

export const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 5%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: auto;
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 30px;
  padding: 25px;
  font-size: 2rem;
  border: 1px solid #000;
  width: 30%;
  align-self: center;
`;
