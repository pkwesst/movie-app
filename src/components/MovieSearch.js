import styled from "styled-components";

const InputForm = styled.form`
  margin: 0;
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 50px;
  border: 1px solid #67676c;
  background-color: #1f1f21;
  width: 50%;
  outline: none;
  font-size: 21px;
  color: #e4e4e6;
  box-sizing: border-box;
`;

const MovieSearch = () => {
  return (
    <InputForm>
      <Input autoFocus placeholder="search movie"></Input>
    </InputForm>
  );
};

export default MovieSearch;
