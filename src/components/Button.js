import styled from "styled-components";

const StyledButton = styled.button`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  border: none;
  border-radius: 100px;
  width: 140px;
  height: 35px;
  box-sizing: border-box;
  font-family: Pretendard;
  font-size: 0.9rem;
  color: #ffffff;
  background: #7054ff;
  :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

export default StyledButton;
