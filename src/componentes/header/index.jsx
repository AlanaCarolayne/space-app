import styled from "styled-components";
import { Input } from "../input";

const HeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

export const Header = ({filtro, setFiltro}) => {
  return (
    <HeaderStyled>
      <img src="../../../images/logo.png" alt="Logo do space app" />
      <Input filtro={filtro} setFiltro={setFiltro}/>
    </HeaderStyled>
  );
};
