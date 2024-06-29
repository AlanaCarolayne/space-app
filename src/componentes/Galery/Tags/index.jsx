import styled from "styled-components";
import tags from "./tags.json";
const BtnDiv = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 24px;
  color: #fff;
  font-size: 20px;
  align-items: center;
`;

const BtnStyled = styled.button`
  width: 100px;
  transition: background-color 0.5s ease;
  border-radius: 10px;
  padding: 10px 8px;
  background-color: rgba(217, 217, 217, 0.3);
  color: rgba(255, 255, 255, 1);
  border: none;
  text-align: center;
  height: 49px;
  cursor: pointer;
  &:hover {
    border: 2px solid #c98cf1;
  }
`;
export const Tags = ({setTag}) => {
  return (
    <>
      <BtnDiv>
        <p>Busque por tags:</p>
      
        {tags.map(tag => <BtnStyled key={tag.id} onClick={() => setTag(tag.id)}>{tag.titulo}</BtnStyled>)}
      </BtnDiv>
    </>
  );
};
