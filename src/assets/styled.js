import styled from "@emotion/styled";

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`;

export const ContainerPhrase = styled.div`
padding: 3rem;
border-radius: 0.5rem;
background-color:#fff;
max-width: 800px;
margin-top: 10rem;
width: 100%;
margin: 0 auto;
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
