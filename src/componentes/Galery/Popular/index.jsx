import styled from "styled-components";
import { TitleStyled } from "../../Title";

const Column = styled.section`
display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;

`
const PopularDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 212px;
  flex-wrap: wrap;
`;

const Image = styled.img`
 max-width: 212px;
 border-radius: 20px;
`
const Btn = styled.button`
  background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
  &:hover {
    background: linear-gradient(90deg, #c98cf1 0%, #7b78e5 100%);
  }
`;

export const Popular = ({ fotos }) => {
  return (
    <Column>
      <TitleStyled $alinhamento="center"> Populares</TitleStyled>
      <PopularDiv>
      {fotos.map(foto => <Image key={foto.id} src={foto.path} alt={foto.alt}/>)}
      </PopularDiv>

      <Btn>Ver mais</Btn>
    </Column>
  );
};
