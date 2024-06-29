import styled from "styled-components";
import { ListItem } from "./ListItem";

const StyledList = styled.ul`
  list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`;

export const SideBar = () => {
  return (
    <aside>
      <nav>
        <StyledList>
          <ListItem
            iconeAtivo="../../../icones/home-ativo.png"
            icone="../../../icones/home.png"
            ativo = {true}
          >
            Início
          </ListItem>
          <ListItem
            iconeAtivo="../../../icones/mais-vistas-ativo.png"
            icone="../../../icones/mais-vistas.png"
          >
            Mais vistas
          </ListItem>
          <ListItem
            iconeAtivo="../../../icones/mais-curtidas-ativo.png"
            icone="../../../icones/mais-curtidas.png"
          >
            Mais curtidas
          </ListItem>
          <ListItem
            iconeAtivo="../../../icones/novas-ativo.png"
            icone="../../../icones/novas.png"
          >
           Novas
          </ListItem>
          <ListItem
            iconeAtivo="../../../icones/surpreenda-ativo.png"
            icone="../../../icones/surpreenda.png"
          >
           Surpreenda-me
          </ListItem>
        </StyledList>
      </nav>
    </aside>
  );
};
