import styled from "styled-components";

export const LoginStyled = styled.div`
  /* background-image: linear-gradient(to right, #0098f795, #f116129e); */
  height: 80vh;
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  transition: all 1s;
`;

export const FormContainer = styled.div`
  transition: all 1s;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
  background-color: #3d3a3a44;
  letter-spacing: 0.2rem;
  padding: 2rem;
  gap: 0.5rem;
  width: 22rem;
  /* height: 20rem; */
`;

export const Header = styled.h1`
  color: white;
  font-size: 2rem;
`;

export const StyledInput = styled.input`
  border-radius: 0.3rem;
  background-color: #050f24af;
  color: #f8f8f8;
  width: 10rem;
  height: 2rem;
  text-indent: 10px;
  outline: none;
  border: inherit;
  ::placeholder {
    color: #ffffffa5;
  }
  &:focus {
    transition: all 0.5s;
    outline: none;
    border: 1px solid white;
    transform: scale(1.05);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledButton = styled.button`
  margin: 0.5 rem;
  border-radius: 2rem;
  border: none;
  height: 2rem;
  width: auto;
  background: #e53835;
  opacity: 0.8;

  color: white;
  cursor: pointer;
  transition: 0.7s ease-in-out;

  :hover {
    transform: scale(1.1);
    opacity: 0.9;
  }
  :active {
    opacity: 1;
  }
`;

export const StyledImg = styled.img`
  width: 8rem;
  /* margin: 1rem; */
`;